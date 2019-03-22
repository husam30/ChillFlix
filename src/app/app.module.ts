import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SafePipe } from './shared/model/savepipe.model';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './main/category/category.component';
import { FilmsComponent } from './main/category/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    SafePipe,
    MainComponent,
    CategoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
