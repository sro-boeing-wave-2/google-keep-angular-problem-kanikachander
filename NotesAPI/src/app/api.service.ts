import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Note } from './note';
import { Observable } from 'rxjs';



//const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  // public getAllNotes() : Observable<Note[]>{
  //   return this.http
  //   .get(API_URL + '/notes')
  //   .map(response => {
  //     const notes = response.json();
  //     return notes.map((note) => new Note(note));
  //   })
  //   .catch(this.handleError);
  // }

  public postNote(note : Note){

  }

  public getNoteById(noteId : number){}

  public updateNote(note : Note){}

  public deleteNoteById(noteId : number){}

}
