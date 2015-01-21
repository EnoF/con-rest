// con-rest
// Version: 0.0.1
//
// Author: Andy Tang
// Fork me on Github: https://github.com/EnoF/con-rest
(function callSelectorScope(angular) {
  'use strict';

  var app = angular.module('con-rest');

  app.directive('callSelector', function callSelectorDirective() {
    return {
      controller: 'restCallVM',
      restrict: 'E',
      scope: {
        label: '@label',
        request: '=request'
      },
      templateUrl: 'callSelector',
      link: function constructor(scope, element) {
        // Retrieve the available requests.
        scope.getAvailableRequests();
        scope.label = scope.label || 'api call';

        element.find('input').on('blur', scope.closeAvailableRequests);
      }
    };
  });
}(window.angular));
