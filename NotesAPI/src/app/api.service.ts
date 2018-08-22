import { Injectable } from '@angular/core';
//import { environment } from '..environments/environment';
import { environment } from '../environments/environment.prod';
import { Http, Response } from '@angular/http';
import { Note } from './note';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { throw } from 'rxjs/Observable/Throw';


const API_URL = 'http://localhost:8000'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  public getAllNotes() : Observable<Note[]>{
    return this.http
    .get(API_URL + '/api/notes')
    .pipe(map(response => {
      const notes = response.json();
      return notes.map((todo) => new Note(todo));
    }))
    .pipe(catchError(this.handleError));
  }

  public postNote(note : Note){
    return this.http
    .post(API_URL + '/api/notes', note)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  public getNoteById(noteId: number): Observable<Note> {
    return this.http
      .get(API_URL + '/api/notes/' + noteId)
      .pipe(map(response => {
        return new Note(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public updateNote(note : Note){
    return this.http
    .put(API_URL + '/api/notes/' + note.id, note)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  public deleteNoteById(noteId : number){
    return this.http
    .delete(API_URL + '/api/notes/' + noteId)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
