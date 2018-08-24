import { TestBed, async, inject } from '@angular/core/testing';
import {Note} from './Note';
import { NotesService } from './notes.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService,
      {
        provide: ApiService,
        useClass: ApiMockService
      }]
    });
  });

  // it('should be created', inject([NotesService], (service: NotesService) => {
  //   expect(service).toBeTruthy();
  // }));
  // it('should return all notes', inject ([NotesService], (service : NotesService) => {
  //   let note1 = new Note ({ title: 'Hello 1', text: 'Writing my first note', pinned: 'false'});
  //   let note2 = new Note ({ title: 'Hello 2', text: 'Writing my second note', pinned: 'true'});
  //   service.postNote(note1);
  //   service.postNote(note2);
  //   expect(service.getAllNotes()).toEqual([note1, note2]);
  // }))
});

// describe('#getAllNotes()', () => {
//   it('should return an array by default', inject ([NotesService], (service: NotesService) => {
//     expect(service.getAllNotes()).toEqual([]);
//   }));
//   it('should return all notes', inject ([NotesService], (service : NotesService) => {
//     let note1 = new Note ({ title: 'Hello 1', text: 'Writing my first note', pinned: 'false'});
//     let note2 = new Note ({ title: 'Hello 2', text: 'Writing my second note', pinned: 'true'});
//     service.postNote(note1);
//     service.postNote(note2);
//     expect(service.getAllNotes()).toEqual([note1, note2]);
//   }))
// });
