import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Show } from 'src/app/shared/model/show.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { ShowService } from 'src/app/shared/services/show.service';
import { DatePipe } from '@angular/common';

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
  @Output()
  public filmEvent = new EventEmitter();

  constructor(public router: Router, private showService: ShowService) {}

  public changeStatusOf(show: Show) {
    show.favoriteStatus = false;

    this.filmEvent.emit(show);
    return show.favoriteStatus;
  }
  ngOnInit() {}
  onSlect(show) {
    this.router.navigate(['/', show.id]);
  }
}
