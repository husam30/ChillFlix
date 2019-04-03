import { Component, OnInit } from '@angular/core';
import { ShowForm } from './show.form';
import { Show } from '../shared/model/show.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/model/category.model';
import { ShowService } from '../shared/services/show.service';
import { ShowForm1 } from './editshows.form';
import { CreateShow } from '../shared/model/create-show.model';
import { ShowForm2 } from './deleteshwos.form';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html'
})
export class FilmFormComponent implements OnInit {
  public addShow: boolean = false;
  public editShow: boolean = false;
  public deleteShow: boolean = false;
  public mostShow: boolean = false;
  public favShow: boolean = false;
  public categories: Category[];
  public shows: Show[];
  public newForm: ShowForm = new ShowForm();
  public newForm1: ShowForm1 = new ShowForm1();
  public newForm2: ShowForm2 = new ShowForm2();

  constructor(
    private showService: ShowService,
    private categoryservice: CategoryService
  ) {}
  public onFormSubmit() {
    const show1: CreateShow = this.newForm.getModel();
    this.showService.saveShow(show1).subscribe(() => {
      this.showService.getAllShows().subscribe(shows => (this.shows = shows));
    });
  }
  public onFormSubmit1() {
    const show1: Show = this.newForm1.getModel();
    this.showService.editShow(show1).subscribe(() => {
      this.showService.getAllShows().subscribe(shows => (this.shows = shows));
    });
  }
  public onFormSubmit2() {
    const show1: Show = this.newForm2.getModel();
    this.showService.deleteShow(show1).subscribe(() => {
      this.showService.getAllShows().subscribe(shows => (this.shows = shows));
    });
  }
  ngOnInit() {
    this.categoryservice
      .getAllcategories()
      .subscribe(categories => (this.categories = categories));
    this.showService.getAllShows().subscribe(shows => (this.shows = shows));
  }
  public showAddShow() {
    this.addShow = !this.addShow;
  }
  public showEditShow() {
    this.editShow = !this.editShow;
  }
  public showDeleteShow() {
    this.deleteShow = !this.deleteShow;
  }
  public showMostShow() {
    this.mostShow = !this.mostShow;
  }
  public showFavShow() {
    this.favShow = !this.favShow;
  }
}
