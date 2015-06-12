module ConREST {
  import routeConfig = Modules.routeConfig;

  var routes: Array<Modules.IRouteSetting> = [{
    templateUrl: 'workflowsPage',
    routeUrl: '/',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'workflowPage',
    routeUrl: '/workflows/:workflowId',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'connectorPage',
    routeUrl: '/workflows/:workflowId/connectors/:connectorId',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'callPage',
    routeUrl: '/workflows/:workflowId/calls/:callId',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'mapperPage',
    routeUrl: '/workflows/:workflowId/connectors/:connectorId/mappers/:mapperId',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'workflowFormPage',
    routeUrl: '/register/workflow',
    controller: 'ConRESTVM'
  }, {
    templateUrl: 'workflowFormPage',
    routeUrl: '/workflows/:workflowId/edit',
    controller: 'ConRESTVM'
  }];

  angular.module('con-rest.con-rest', [
    'con-rest.workflow-overview',
    'con-rest.workflow',
    'con-rest.call-overview',
    'con-rest.call',
    'con-rest.connector',
    'con-rest.execution',
    'ngRoute',
    'ngMaterial'
  ])
    .config(routeConfig(routes))
    .controller(ConRESTVMS)
    .directive(ConRESTDirectives);
}
