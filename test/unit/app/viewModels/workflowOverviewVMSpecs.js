// con-rest
// Version: 0.0.1
//
// Author: Andy Tang
// Fork me on Github: https://github.com/EnoF/con-rest
(function workflowOverviewVMSpecs() {
    'use strict';

    describe('workflowOverviewVM specs', function workflowOverviewVMSpecs() {
        var scope, httpBackend, events;
        beforeEach(module('con-rest'));

        beforeEach(inject(function ($controller, $rootScope, $httpBackend, _events_) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            events = _events_;
            $controller('workflowOverviewVM', {
                $scope: scope
            });
        }));

        it('should load all workflows', function loadExistingWorkflows() {
            // given
            var response = null;
            var workflows = [
                {

                }
            ]
            httpBackend.expect('GET', '/api/workflows/').
                respond(200, workflows);

            // when
            scope.$on(events.WORKFLOWS_RETRIEVED, function workFlowCreated(event, res) {
                response = res;
            });
            scope.getWorkflows();

            // then
            httpBackend.flush();
            expect(response.status).toEqual(200);
            expect(response.data).toEqual(workflows);
            expect(scope.workflows).toEqual(workflows);
        });
    });
}());