import {Resource} from 'rest-io';
import {Response, Request} from 'express';
import {Document} from 'mongoose';
import request = require('request');
import config = require('../config');
import _ = require('underscore');
import queue = require('q');

var PAYLOAD = 'payload';
var FORM_DATA = 'formData';

class ExecutionResource extends Resource {
  private createHeaders(headers: request.Headers = {}) {
    var defaultHeaders = {
      'user-agent': 'con-rest'
    };
    defaultHeaders = _.extend(defaultHeaders, headers);
    return defaultHeaders;
  }

  private createRequestConfig(request) {
    var options = {
      method: request.method,
      url: request.url,
      headers: this.createHeaders(request.headers),
      agentOptions: {
        ca: config.getCertificates()
      },
      strictSSL: config.getSSLConfig(),
      type: request.type,
      data: request.data
    };
    this.setRequestData(options);
    return options;
  }

  private setRequestData(options: IRequestOptions) {
    if (!!options.data && options.type === PAYLOAD) {
      // *PAYLOAD* will go into the `body` of the request
      try {
        // when we are handling *PAYLOAD* data then we will try to stringify the data
        // e.g. converting the internal js object to an json string
        options.body = JSON.stringify(options.data);
        options.json = true;
      } catch (e) {
        // if the stringify fails we are just taking the string provided from mongo
        options.body = options.data;
      }
    } else if (options.type === FORM_DATA) {
      // *FORM_DATA* will go into the `formData` of the request
      options.formData = options.data;
    }
  }

  private createExecutionData(request, options, response, body): IExecution {
    return {
      statusCode: response.statusCode,
      request: request,
      url: request.url,
      response: this.parseBody(body),
      headers: options.headers,
      type: options.type,
      data: options.data
    };
  }

  private parseBody(body): string | Object {
    var parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (error) {
      console.log('Non json response retrieved');
      parsedBody = body;
    }
    return parsedBody;
  }

  private saveExecution(execution: IExecution) {
    return this.model.create(execution)
      .then((data: Document) => {
        var returnData: any = data.toObject();
        // populate request manually
        returnData.request = execution.request;
        return returnData;
      });
  }

  private execute(req): Q.IPromise<IExecution> {
    var deferred = queue.defer();
    var options: any = this.createRequestConfig(req);
    var r = request(options, (err, response, body) => {
      if (!!err) {
        deferred.reject(err);
      } else {
        deferred.resolve(this.createExecutionData(req, options, response, body));
      }
    });
    return deferred.promise;
  }

  create(req: Request, res: Response) {
    var id = req.params[this.parentResource.paramId];
    // Find the request we want to execute
    this.parentResource.model.findById(id)
      .populate('files.file')
      .exec()
      .then((request) => this.execute(request))
      .then((execution: IExecution) => this.saveExecution(execution))
      .then((data) => res.send(data),
        (err: Error) => {
          this.errorHandler(err, res);
        });
  }
}

interface IRequestOptions {
  method: string;
  url: string;
  headers: Object;
  agentOptions: {
    ca: string
  };
  strictSSL: boolean;
  type: string;
  data: any;
  body?: string;
  json?: Object;
  formData?: Object;
}

interface IExecution {
  statusCode: number;
  request: IRequestOptions;
  url: string;
  response: string | Object;
  headers: string;
  type: string;
  data: any;
}

export = ExecutionResource;
