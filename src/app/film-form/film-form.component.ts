import { Component, OnInit } from '@angular/core';
import { ShowForm } from './show.form';
import { Show } from '../shared/model/show.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/model/category.model';
import { ShowService } from '../shared/services/show.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html'
})
export class FilmFormComponent implements OnInit {
  public categories: Category[];
  public newForm: ShowForm = new ShowForm();
  constructor(
    private showService: ShowService,
    private categoryservice: CategoryService
  ) {}
  public onFormSubmit() {
    const show1: Show = this.newForm.getModel();
    this.showService.saveShow(show1).subscribe(() => {});
  }
  ngOnInit() {
    this.categoryservice
      .getAllcategories()
      .subscribe(categories => (this.categories = categories));
  }
}
