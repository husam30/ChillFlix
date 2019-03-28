import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FilmsComponent } from './main/category/films/films.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmFormComponent } from './film-form/film-form.component';

const routes: Routes = [
  { path: 'addShow', component: FilmFormComponent },
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
