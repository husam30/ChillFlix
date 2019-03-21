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
      director: 'Christopher Nolan',
      releaseDate: 2014,
      url: 'https://www.youtube.com/embed/2LqzF5WauAw'
    },
    {
      title: 'Titanic',
      director: 'James cameron',
      releaseDate: 1997,
      url: 'https://www.youtube.com/embed/2e-eXJ6HgkQ'
    }
  ];
}
