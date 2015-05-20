module ConREST {
  angular.module('con-rest.workflow-overview', ['con-rest.templates', 'con-rest.dao'])
    .controller(WorkflowOverviewVMS)
    .directive(WorkflowOverviewDirectives);
}
