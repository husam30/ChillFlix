import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public categories: Category[] = [
    {
      name: 'action',
      show: [
        {
          title: 'Interstellar',
          director: 'Christopher Nolan',
          releaseDate: 2014,
          url: 'https://www.youtube.com/embed/2LqzF5WauAw'
        }
      ]
    },
    {
      name: 'Romance',
      show: [
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
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
