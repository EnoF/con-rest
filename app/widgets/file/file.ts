module ConREST {
  import appConfig = Modules.appConfig;
  angular.module('con-rest.file', [
    'con-rest.templates',
    'con-rest.dao',
    'ngMaterial'
  ])
    .config(appConfig)
    .controller(FileVMS)
    .directive(FileDirectives);
}
