import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SafePipe } from './shared/model/savepipe.model';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './main/category/category.component';
import { FilmsComponent } from './main/category/films/films.component';
import { HttpClientModule } from '@angular/common/http';

import { FilmFormComponent } from './film-form/film-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';
import { FilmViewComponent } from './main/film-view/film-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    SafePipe,
    MainComponent,
    CategoryComponent,
    FilmViewComponent,
    FilmFormComponent,
    CategoryFormComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
