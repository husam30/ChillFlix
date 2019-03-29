import { Component, OnInit } from '@angular/core';
import { CategoryForm } from './category.form';
import { CategoryCreat } from '../shared/model/create-category-model';
import { CategoryService } from '../shared/services/category.service';
import { EditCategoryForm } from './editcategory.form';
import { Category } from '../shared/model/category.model';
import { CategoryEdit } from '../shared/model/edit-category-model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  public categories: Category[];
  public addForm: CategoryForm = new CategoryForm();
  public editForm: EditCategoryForm = new EditCategoryForm();
  constructor(private categoryservice: CategoryService) {}

  ngOnInit() {
    this.categoryservice
      .getAllcategories()
      .subscribe(categories => (this.categories = categories));
  }
  public onFormSubmit() {
    const category: CategoryCreat = this.addForm.getModel();
    this.categoryservice.saveCategory(category).subscribe(() => {});
  }
  // tslint:disable-next-line: use-life-cycle-interface
  public onFormSubmit1() {
    const category1: CategoryEdit = this.editForm.getModel();
    this.categoryservice.editCategory(category1).subscribe(() => {});
  }
}
