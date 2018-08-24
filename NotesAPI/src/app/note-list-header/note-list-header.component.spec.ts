import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListHeaderComponent } from './note-list-header.component';
import {MatToolbarModule, MatCardModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// @NgModule({
//   imports:[
//     MatToolbarModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatGridListModule,
//     MatCheckboxModule,
//     ReactiveFormsModule,
//     MatIconModule
//   ]
// });
describe('NoteListHeaderComponent', () => {
  let component: NoteListHeaderComponent;
  let fixture: ComponentFixture<NoteListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListHeaderComponent ],
      imports:[
        MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    NgModule,
    Component
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
