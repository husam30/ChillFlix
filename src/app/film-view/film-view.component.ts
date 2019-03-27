import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  public filmWidth = 240;
  public filmHeight = 160;
  public movieTitle: string;
  public movieReleaseDate: string;
  public movieUrl: string;
  public movieDirector: string;
  public movieCategory: string;
  public movieDescription: string;

  constructor(
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    this.movieTitle = title;
    let releaseDate = this.route.snapshot.paramMap.get('releaseDate');
    this.movieReleaseDate = releaseDate;
    let url = this.route.snapshot.paramMap.get('url');
    this.movieUrl = url;
    let director = this.route.snapshot.paramMap.get('director');
    this.movieDirector = director;
    let movieCategory = this.route.snapshot.paramMap.get('movieCategory');
    this.movieCategory = movieCategory;
    let movieDescription = this.route.snapshot.paramMap.get('description');
    this.movieDescription = movieDescription;
  }
  public createSafeYoutubeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + url
    );
  }
}
