module Models {
  export class Workflow extends Serializable {
    constructor(json: Object) {
      super(json);
    }
  }

  export interface IWorkflow {
    name: string;
    calls: Array<string>;
    connectors: Array<string>;
  }
}
