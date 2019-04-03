import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Show } from 'src/app/shared/model/show.model';
import { ShowService } from 'src/app/shared/services/show.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  public show: Show;
  public filmWidth = 240;
  public filmHeight = 200;
  constructor(
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
    private readonly showservice: ShowService
  ) {}

  ngOnInit() {
    this.getOneShow();
  }
  public getOneShow() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showservice.getOneShow(id).subscribe(show => (this.show = show));
  }

  public createSafeYoutubeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + url
    );
  }
  public changeStatusOn(show: Show) {
    show.favoriteStatus = true;
    show.favoriteCounter = show.favoriteCounter + 1;
    this.showservice.editShow(show).subscribe(() => {});

    return show.favoriteStatus;
  }
  public changeStatusOf(show: Show) {
    show.favoriteStatus = false;
    this.showservice.editShow(show).subscribe(() => {});

    return show.favoriteStatus;
  }
}
