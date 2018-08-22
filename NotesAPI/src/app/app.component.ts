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
  notes : Note[] = [];
  constructor(private notesService : NotesService){}

  // postNote(){
  //   this.notesService.postNote(this.newNote);
  //   this.newNote = new Note();
  // }

  public ngOnInit(){
    this.notesService
    .getAllNotes()
    .subscribe(
      (notes) => {
        this.notes = notes;
      }
    )
  }

  postNote(note){
    this.notesService
    .postNote(note)
    .subscribe(
      (newNote) => {
        this.notes = this.notes.concat(newNote);
      }
    );
  }

  onRemoveNote(note){
    this.notesService
    .deleteNoteById(note.id)
    .subscribe(
      (_) => {
        this.notes = this.notes.filter((t) => t.id !== note.id);
      }
    );
  }

  // get notes()
  // {
  //   return this.notesService.getAllNotes();
  // }
  onToggleNoteIsPinned(note){
    this.notesService
    .toggleNoteIsPinned(note)
    .subscribe(
      (updatedNote) => {
        note = updatedNote;
      }
    );
  }
}
