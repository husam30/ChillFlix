import { Component, OnInit, NgModule } from '@angular/core';
import { Category } from '../shared/model/category.model';
import { CategoryService } from '../shared/services/category.service';
import { ShowService } from '../shared/services/show.service';
import { Show } from '../shared/model/show.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private readonly catergoryService: CategoryService,
    private showServive: ShowService
  ) {}
  public categories: Category[] = [];
  public showDropdown = false;
  public recentlyCategory: Category = new Category();
  public mostCategory: Category = new Category();
  public likedCategory: Category = new Category();
  // public loadCategories($event) {
  //   let cat: Category = new Category();
  //   let shows: Show[];
  //   let cat1: Category = new Category();
  //   let shows1: Show[];

  //   this.showServive.editShow($event).subscribe(() => {
  //     const allcars$ = this.catergoryService.getAllcategories();
  //     allcars$.subscribe(categories1 => {
  //       this.categories = categories1;
  //       this.showServive.getRecentlyViewd().subscribe(show1 => {
  //         shows = show1;
  //         this.recentlyCategory.name = 'Recently Viewed';
  //         this.recentlyCategory.shows = shows;

  //         this.showServive.getMostViewd().subscribe(show1 => {
  //           shows1 = show1;
  //           this.mostCategory.name = 'Most Viewed';
  //           this.mostCategory.shows = shows1;
  //         });
  //       });
  //     });
  //   });
  // }
  ngOnInit() {
    this.getCategory();
  }
  public getCategory() {
    let shows1: Show[];

    let shows: Show[];
    const allcars$ = this.catergoryService.getAllcategories();
    allcars$.subscribe(categories1 => {
      this.categories = categories1;
      this.showServive.getRecentlyViewd().subscribe(show1 => {
        shows = show1;
        this.recentlyCategory.name = 'Recently Viewed';
        this.recentlyCategory.shows = shows;

        this.showServive.getMostViewd().subscribe(show1 => {
          shows1 = show1;
          this.mostCategory.name = 'Most Viewed';
          this.mostCategory.shows = shows1;
          this.showServive.getLikedShows().subscribe(show1 => {
            shows1 = show1;
            this.likedCategory.name = 'Most Liked';
            this.likedCategory.shows = shows1;
          });
        });
      });
    });
  }

  public toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
