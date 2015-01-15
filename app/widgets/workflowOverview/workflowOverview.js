// con-rest
// Version: 0.0.1
//
// Author: Andy Tang
// Fork me on Github: https://github.com/EnoF/con-rest
(function workflowOverview(angular) {
  'use strict';

  var app = angular.module('con-rest');

  app.directive('workflowOverview', function workflowOverviewDirective(events) {
    return {
      controller: 'workflowOverviewVM',
      restrict: 'E',
      scope: {},
      templateUrl: 'workflowOverview',
      link: function workflowOverviewConstructor(scope) {
        scope.getWorkflows();

        scope.$on(events.WORKFLOW_DELETED, scope.removedWorkflow);
      }
    };
  });
}(window.angular));
