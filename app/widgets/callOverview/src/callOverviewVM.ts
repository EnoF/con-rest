module CallOverviewVMS {
  import CallDAO = DAO.CallDAO;
  import Call = Models.Call;
  import Session = Models.Session;
  import ILocationService = ng.ILocationService;

  export class CallOverviewVM {
    static $inject = ['$scope', 'callDAO', 'session', '$location'];
    calls: Array<Call> = [];
    session: Session;
    $location: ILocationService;

    constructor($scope, callDAO: CallDAO, session: Session, $location: ILocationService) {
      this.session= session;
      this.$location = $location;
      $scope.vm = this;

      callDAO.getAll()
        .then((calls: Array<Call>) => {
          this.calls = calls;
        });
    }

    select(call: Call) {
      this.session.call = call;
      this.$location.path('/calls/' + call._id);
    }
  }
}
