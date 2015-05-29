module CallVMS {
  import CallDAO = DAO.CallDAO;
  import Call = Models.Call;
  import aceConfig = Modules.aceConfig;
  import IAceConfig = Modules.IAceConfig;

  export class CallVM {
    static $inject = ['$scope', 'callDAO'];
    aceConfig: IAceConfig = aceConfig;
    call: Call;
    callDAO: CallDAO;
    headers: string;
    data: string;
    methods: Array<string> = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'OPTIONS'
    ];
    types: Array<string> = [
      'payload',
      'formData'
    ];

    constructor($scope, callDAO: CallDAO) {
      this.callDAO = callDAO;
      $scope.vm = this;
      if (!!$scope.call) {
        this.call = $scope.call;
        this.headers = this.convertToString($scope.call.headers);
        this.data = this.convertToString($scope.call.data);
      } else if (!!$scope.id) {
        callDAO.getById($scope.id)
          .then((call) => {
            this.call = call;
            this.headers = this.convertToString(call.headers);
            this.data = this.convertToString(call.data);
        });
      } else {
        this.call = new Call();
      }
    }

    convertToString(json: Object): string {
      if (!json) {
        return '-';
      }
     return JSON.stringify(json, null, 4);
    }

    convertToJSON(str: string): Object {
      try {
        return JSON.parse(str);
      } catch(e) {
        return null;
      }
    }

    save(): void {
      this.call.headers = this.convertToJSON(this.headers);
      this.call.data = this.convertToJSON(this.data);
      this.callDAO.save(this.call);
    }
  }
}
