export class CheckedListItem {
  id : number;
  ListItem : string = '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
