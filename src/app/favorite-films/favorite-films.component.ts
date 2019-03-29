import { Component, OnInit } from '@angular/core';
import { Show } from '../shared/model/show.model';
import { ShowService } from '../shared/services/show.service';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.css']
})
export class FavoriteFilmsComponent implements OnInit {
  public shows: Show[] = [];

  constructor(private readonly showService: ShowService) {}
  public findFavorite(shows: Show[]) {
    for (const x of shows) {
      if (x.favoriteStatus === true) {
        this.shows.push(x);
      }
    }
  }
  ngOnInit() {
    this.showService.getAllShows().subscribe(shows => {
      this.findFavorite(shows);
    });
  }
}
