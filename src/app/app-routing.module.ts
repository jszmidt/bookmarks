import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


const routes: Routes = [
  {
    path: 'bookmarks',
    canActivate: [AuthGuard],
    loadChildren: './bookmark/bookmark.module#BookmarkModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: 'bookmarks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
