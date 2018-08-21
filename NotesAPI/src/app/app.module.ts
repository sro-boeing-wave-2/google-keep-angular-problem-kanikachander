import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NotesService } from './notes.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoteListHeaderComponent } from './note-list-header/note-list-header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteListHeaderComponent,
    NoteListComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotesService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
