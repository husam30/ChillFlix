import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Show } from '../shared/model/show.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/model/category.model';
import { ShowService } from '../shared/services/show.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  public show: Show;
  public filmWidth = 200;
  public filmHeight = 140;
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
}
