import { Component } from '@angular/core';
import { Show } from './shared/model/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChillFlix';
  public show: Show[] = [
    {
      title: 'Interstellar',
      director: 'Tarentino',
      releaseDate: 2014,
      url: 'https://www.youtube.com/embed/-RP7GO1NKRw'
    },
    {
      title: 'Titanic',
      director: 'James cameron',
      releaseDate: 314,
      url: 'https://www.youtube.com/embed/-RP7GO1NKRw'
    }
  ];
}
