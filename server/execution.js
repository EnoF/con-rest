// con-rest
// Version: 0.0.1
//
// Author: Dominik Kukacka
// Fork me on Github: https://github.com/EnoF/con-rest
(function executionScope(mongoose, queue) {
    'use strict';

    var Schema = mongoose.Schema;

    var executionCallSchema = new Schema({
        workflow: {type: Schema.Types.ObjectId, ref: 'Workflow'},
        apiCall: {type: Schema.Types.ObjectId, ref: 'APICall'},
        statusCode: Number,
        response: Schema.Types.Mixed,
    });

    var Execution = mongoose.model('Execution', executionCallSchema);

    function getExecutions(req, res) {
        var deferred = queue.defer();
        Execution.find(deferred.makeNodeResolver());
        deferred.promise.then(function returnResults(results) {
            res.send(results);
        });
        return deferred.promise;
    }

    function getExecutionById(req, res) {
        var deferred = queue.defer();
        var id = mongoose.Types.ObjectId(req.params.id);
        Execution.findById(id, deferred.makeNodeResolver());
        deferred.promise.then(function returnCall(call) {
            res.send(call);
        });
        return deferred.promise;
    }

    module.exports = {
        Execution: Execution,
        getExecutions: getExecutions,
        getExecutionById: getExecutionById
    };
}(require('mongoose'), require('q')));