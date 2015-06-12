module Models {
  export class Map extends Serializable {
    _id: string;
    place: string;
    source: string;
    destination: string;

    constructor(json?: IMap) {
      if (!!json) {
        super(json);
      }
    }
  }

  export interface IMap {
    _id: string;
    place: string;
    source: string;
    destination: string;
  }
}
