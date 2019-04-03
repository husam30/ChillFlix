import { Component, OnInit } from '@angular/core';
import { Show } from '../shared/model/show.model';
import { ShowService } from '../shared/services/show.service';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.css']
})
export class FavoriteFilmsComponent implements OnInit {
  public shows: Show[] = [];

  constructor(
    private readonly showService: ShowService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.showService.getFavShows().subscribe(shows => {
      this.shows = shows;
    });
  }
  public LoadShows($event) {
    this.showService.editShow($event).subscribe(() => {
      this.showService.getFavShows().subscribe(shows => {
        this.shows = shows;
      });
    });
  }
}
