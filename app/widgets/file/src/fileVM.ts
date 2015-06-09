module FileVMS {
  import FileDAO = DAO.FileDAO;
  import File = Models.File;

  export class FileVM {
    static $inject = ['$scope', 'fileDAO'];

    selectedFile: File;
    files: Array<File> = [];
    $scope: any;

    constructor($scope, fileDAO: FileDAO) {
      $scope.vm = this;
      this.$scope = $scope;

      fileDAO.getAll()
        .then((files: Array<File>) =>
          this.files = files);
    }

    selectFile(file: File) {
      this.$scope.fileId = file._id;
      this.selectedFile = file;
    }
  }
}
