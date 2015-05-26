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
  }];

  angular.module('con-rest.con-rest', [
    'con-rest.workflow-overview',
    'con-rest.workflow',
    'con-rest.call-overview',
    'con-rest.call',
    'con-rest.connector',
    'ngRoute',
    'ngMaterial'
  ])
    .config(routeConfig(routes))
    .controller(ConRESTVMS)
    .directive(ConRESTDirectives);
}
