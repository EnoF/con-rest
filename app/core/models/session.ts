module Models {
  export class Session {
    workflow: Workflow;
    call: Call;
    calls: Array<Call>;
    connector: Connector;
    mapper: Mapper;
  }

  export function session() {
    return new Session();
  }
}
