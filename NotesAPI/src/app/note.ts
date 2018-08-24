import { CheckedListItem } from "./checkedlistitem";
import { Label } from "./Label";

export class Note {
  id : number;
  title : string = '';
  text : string = '';
  pinned : boolean = false;
  CheckedList : CheckedListItem;
  Labels : Label;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
