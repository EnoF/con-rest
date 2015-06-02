module ExecutionDirectives {
  export function execution(): ng.IDirective {
    return {
      restrict: 'E',
      scope: {
        workflowId: '@',
        execution: '='
      },
      controller: 'ExecutionVM',
      templateUrl: 'execution'
    };
  }
}
