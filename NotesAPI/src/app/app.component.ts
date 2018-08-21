import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'NotesAPI';
  newNote: Note = new Note();
  constructor(private notesService : NotesService){}

  // postNote(){
  //   this.notesService.postNote(this.newNote);
  //   this.newNote = new Note();
  // }

  postNote(note: Note){
    this.notesService.postNote(note);
  }

  onRemoveNote(note){
    this.notesService.deleteNoteById(note.id);
  }

  get notes()
  {
    return this.notesService.getAllNotes();
  }
  onToggleNoteIsPinned(note: Note){
    this.notesService.toggleNoteIsPinned(note);
  }
}
