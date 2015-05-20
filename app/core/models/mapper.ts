module Models {
  export class Mapper extends Serializable {
    _id: string;
    name: string;
    maps: Array<Map>;

    constructor(json: IMapper) {
      super(json);
      this.maps = this.convertContentToClass(json.maps, Map);
    }
  }

  export interface IMapper {
    _id: string;
    name?: string;
    maps?: Array<IMap>;
  }
}
