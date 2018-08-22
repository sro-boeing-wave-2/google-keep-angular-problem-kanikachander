import { Injectable } from '@angular/core';
import { Note } from './note';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class NotesService {

  lastId : number = 0;
  notes : Note[] = [];

  constructor(
    private api : ApiService
  ) { }

  postNote(note : Note) : Observable<Note> {
    return this.api.postNote(note);
  }

  deleteNoteById (noteId : number) : Observable<Note> {
    return this.api.deleteNoteById(noteId);
  }

  updateNote(note: Note): Observable<Note> {
    return this.api.updateNote(note);
  }

  getAllNotes() : Observable<Note[]> {
    return this.api.getAllNotes();
  }

  getNoteById (id: number) : Observable<Note>  {
    return this.api.getNoteById(id);
  }

  toggleNoteIsPinned(note: Note) {
    note.pinned = !note.pinned;
    return this.api.updateNote(note);
  }
}
