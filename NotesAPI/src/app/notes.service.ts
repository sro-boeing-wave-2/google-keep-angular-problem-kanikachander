import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  lastId : number = 0;
  notes : Note[] = [
    {
      "id":1,
      "title" : "My Note",
      "isPinned": true
    }
  ];

  constructor() { }

  postNote(note : Note) : NotesService{
    if (!note.id){
      note.id = ++this.lastId;
    }

    this.notes.push(note);
    return this;
  }

  deleteNoteById (id : number) : NotesService{
    this.notes = this.notes.filter(note => note.id !== id);
    return this;
  }

  updateNoteById (id: number, values: Object = {}): Note {
    let note = this.getNoteById(id);
    if(!note){
      return null;
    }
    Object.assign(note, values);
    return note;
  }

  getAllNotes() : Note[]{
    return this.notes;
  }

  getNoteById (id: number) : Note {
    return this.notes.filter(note => note.id === id).pop();
  }

  toggleNoteIsPinned(note : Note){
    let updatedNote = this.updateNoteById(note.id, {
      isPinned: !note.isPinned
    });
    return updatedNote;
  }
}
