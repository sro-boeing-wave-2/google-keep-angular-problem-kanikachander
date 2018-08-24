import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  public getAllNotes(): Observable<Note[]>{
    return of([
      new Note({title: 'Hello 1', text: 'Writing my first note', pinned: 'false'})
    ]);
  }

  public getNoteById(noteId: number): Observable<Note>{
    return of(
      new Note({title: 'Hello 2', text: 'Writing my second note', pinned: 'true'})
    );
  }

  public createNote(note: Note): Observable<Note>{
    return of(
      new Note({title: 'Hello 3', text: 'Writing my third note', pinned: 'false'})
    );
  }

  public updateNote(note: Note): Observable<Note>{
    return of(
      new Note({title: 'Hello 3', text: 'Writing my fourth note', pinned: 'true'})
    );
  }

  public deleteNoteById(noteId:  number): Observable<Note>{
    return null;
  }
}
