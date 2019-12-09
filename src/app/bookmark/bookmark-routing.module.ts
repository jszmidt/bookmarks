import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './components/bookmark-add/bookmark-add.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarkListComponent
  },
  {
    path: 'add',
    component: BookmarkAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule {
}
