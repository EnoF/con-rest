// con-rest
// Version: 0.0.1
//
// Author: Andy Tang
// Fork me on Github: https://github.com/EnoF/con-rest
(function serverScope(sinon) {
    'use strict';

    describe('con-rest server', function conRestServerScope() {

        var mongoose = require('mongoose');
        var mockgoose = require('mockgoose');

        require('monckoose');

        var queue = require('q');
        var path = require('path');
        var api = require('../../../server/api');

        beforeEach(function resetMongo(done) {
            mockgoose.reset();
            require(path.join(__dirname, 'mocks'))(done);
        });

        describe('retrieval of API calls', function retrievalScope() {
            it('should return all the registered API calls', function getRegisteredAPICalls(done) {
                var req;
                var res;
                queue().
                    then(function given() {
                        req = {};
                        res = {};
                        res.send = sinon.spy();
                    }).
                    then(function when() {
                        return api.getAPICalls(req, res);
                    }).
                    then(function then(apis) {
                        apis.length.should.be.above(0);
                        res.send.args[0][0].length.should.be.above(0);
                    }).
                    then(done).
                    catch(done);
            });

            it('should return a API call based on id', function getRegisteredAPICallById(done) {
                var req;
                var res;
                queue().
                    then(function given() {
                        req = {
                            params: {
                                id: '545726928469e940235ce769'
                            }
                        };
                        res = {};
                        res.send = sinon.spy();
                    }).
                    then(function when() {
                        return api.getAPICallById(req, res);
                    }).
                    then(function then() {
                        var call = res.send.args[0][0];
                        call.name.should.be.exactly('firstCall');
                        call.url.should.be.exactly('http://test.one');
                        call.method.should.be.exactly('GET');
                        call.data.page.should.be.exactly(2);
                    }).
                    then(done).
                    catch(done);
            });
        });

        describe('registration', function registrationScope() {
            it('should register an new API call', function registerApiCall(done) {
                var req;
                var res;
                queue().
                    then(function given() {
                        req = {
                            body: {
                                name: 'fakeCall',
                                url: 'fakeUrl',
                                method: 'GET',
                                data: { ba: 'nana'},
                                headers: { he: 'ad'}
                            }
                        };
                        res = {};
                        res.send = sinon.spy();
                    }).
                    then(function when() {
                        return api.registerAPICall(req, res);
                    }).
                    then(function then() {
                        res.send.calledOnce.should.be.true;
                        res.send.args[0][0].should.be.a.String;
                    }).
                    then(done).
                    catch(done);
            });
        });
    });

}(require('sinon'), require('should')));