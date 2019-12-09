import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkAddComponent } from './components/bookmark-add/bookmark-add.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookmarkListComponent,
    BookmarkAddComponent,
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BookmarkListComponent,
  ]
})
export class BookmarkModule {
}
