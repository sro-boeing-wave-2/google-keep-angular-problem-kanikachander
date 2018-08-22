export class Note {
  id : number;
  title : string = '';
  text : string = '';
  pinned : boolean = false;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
