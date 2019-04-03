import { Component, OnInit } from '@angular/core';
import { CategoryForm } from './category.form';
import { CategoryCreat } from '../shared/model/create-category-model';
import { CategoryService } from '../shared/services/category.service';
import { EditCategoryForm } from './editcategory.form';
import { Category } from '../shared/model/category.model';
import { CategoryEdit } from '../shared/model/edit-category-model';
import { DeleteCategoryForm } from './deleteCategory.form';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  public addCategory: boolean = false;
  public editCategory: boolean = false;
  public deleteCategory: boolean = false;
  public categories: Category[];
  public addForm: CategoryForm = new CategoryForm();
  public editForm: EditCategoryForm = new EditCategoryForm();
  public deleteForm: DeleteCategoryForm = new DeleteCategoryForm();
  constructor(private categoryservice: CategoryService) {}

  ngOnInit() {
    this.categoryservice
      .getAllcategories()
      .subscribe(categories => (this.categories = categories));
  }
  public onFormSubmit() {
    const category: CategoryCreat = this.addForm.getModel();
    this.categoryservice.saveCategory(category).subscribe(() => {
      this.categoryservice
        .getAllcategories()
        .subscribe(categories => (this.categories = categories));
    });
  }
  // tslint:disable-next-line: use-life-cycle-interface
  public onFormSubmit1() {
    const category1: CategoryEdit = this.editForm.getModel();
    this.categoryservice.editCategory(category1).subscribe(() => {
      this.categoryservice
        .getAllcategories()
        .subscribe(categories => (this.categories = categories));
    });
  }
  public onFormSubmit2() {
    const category1: CategoryEdit = this.deleteForm.getModel();
    this.categoryservice.deleteCat(category1).subscribe(() => {
      this.categoryservice
        .getAllcategories()
        .subscribe(categories => (this.categories = categories));
    });
  }
  public catShowCat() {
    this.addCategory = !this.addCategory;
  }
  public cateditCat() {
    this.editCategory = !this.editCategory;
  }
  public catDeleteCat() {
    this.deleteCategory = !this.deleteCategory;
  }
}
