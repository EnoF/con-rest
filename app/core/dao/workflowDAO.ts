module DAO {
  import IInjectorService = ng.auto.IInjectorService;
  import Workflow = Models.Workflow;

  export class WorkflowDAO extends DAO {
    constructor($injector: IInjectorService) {
      super($injector);
    }

    getAll(): ng.IPromise<Array<Workflow>> {
      var deferred = this.$q.defer();
      this.get('/api/workflows/', null)
        .then((response: any) => {
          deferred.resolve(new Workflow(response.data));
        }, deferred.reject);
      return deferred.promise;
    }
  }

  var instance = null;

  export function workflowDAO($injector: IInjectorService) {
    return instance = new WorkflowDAO($injector);
  }
  workflowDAO.$inject = ['$injector'];
}
