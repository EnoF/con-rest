module Models {
  export class File extends Serializable {
    _id: string;
    name: string;
    mime: string;

    constructor(json: IFile) {
      super(json);
    }
  }

  export interface IFile {
    _id: string;
    name: string;
    mime: string;
  }
}
