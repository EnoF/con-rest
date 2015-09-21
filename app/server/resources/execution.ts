import ExecutionResource = require('../resourceTypes/executionResource');
import {Schema} from 'mongoose';
var request = require('./request');

var execution = new ExecutionResource({
  name: 'execution',
  model: {
    workflow: {
      type: Schema.Types.ObjectId,
      ref: 'Workflow'
    },
    apiCall: {
      type: Schema.Types.ObjectId,
      ref: 'APICall'
    },
    statusCode: Number,
    url: String,
    response: Schema.Types.Mixed,
    headers: Schema.Types.Mixed,
    data: Schema.Types.Mixed,
    executedAt: Date
  },
  parentRef: 'apiCall',
  parentResource: request
});

export = execution;
