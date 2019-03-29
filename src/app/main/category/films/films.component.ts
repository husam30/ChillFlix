import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/shared/model/show.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { ShowService } from 'src/app/shared/services/show.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input()
  public show: Show;

  public filmWidth = 240;
  public filmHeight = 160;

  constructor(private router: Router, private showService: ShowService) {}
  public changeStatusOn(show: Show) {
    show.favoriteStatus = true;
    this.showService.editShow(show).subscribe(() => {});

    return show.favoriteStatus;
  }
  public changeStatusOf(show: Show) {
    show.favoriteStatus = false;
    this.showService.editShow(show).subscribe(() => {});

    return show.favoriteStatus;
  }
  ngOnInit() {}
  onSlect(show) {
    this.router.navigate(['/', show.id]);
  }
}
