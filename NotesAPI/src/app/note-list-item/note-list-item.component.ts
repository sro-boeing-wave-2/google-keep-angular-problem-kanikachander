import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {

  updateDetails = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    pinned: new FormControl(''),
  });
  edit: boolean = false;
  @Input() note: Note;

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  @Output()
  toggleIsPinned: EventEmitter<Note> = new EventEmitter();

  @Output()
  update: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleNoteIsPinned(note: Note){
    this.toggleIsPinned.emit(note);
  }

  removeNote(note: Note){
    this.remove.emit(note);
  }

  toggleEdit(edit: boolean){
    this.edit = !this.edit;
  }

  updateNote(note: Note) {
    this.edit = !this.edit;
    this.update.emit(note);
  }

}
