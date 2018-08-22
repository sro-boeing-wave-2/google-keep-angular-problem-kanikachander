import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {

  update = new FormControl('');
  @Input() note: Note;

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  @Output()
  toggleIsPinned: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleNoteIsPinned(note: Note){
    this.toggleIsPinned.emit(note);
  }

  removeNote(note: Note){
    this.remove.emit(note);
  }

}
