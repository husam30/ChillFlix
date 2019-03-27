import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FilmsComponent } from './main/category/films/films.component';
import { FilmViewComponent } from './film-view/film-view.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: ':title/:releaseDate/:url/:director/:movieCategory/:description',
    component: FilmViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
