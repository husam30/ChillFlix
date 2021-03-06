import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

import { FilmFormComponent } from './film-form/film-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';
import { FilmViewComponent } from './main/film-view/film-view.component';

const routes: Routes = [
  {
    path: 'favoritefilms',
    component: FavoriteFilmsComponent
  },
  { path: 'addShow', component: FilmFormComponent },
  { path: 'addCategory', component: CategoryFormComponent },

  { path: '', component: MainComponent },
  {
    path: ':id',
    component: FilmViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
