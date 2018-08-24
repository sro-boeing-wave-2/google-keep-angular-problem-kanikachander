export class Label {
  id : number;
  LabelName : string = '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
