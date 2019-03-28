import { Component, OnInit } from '@angular/core';
import { categoryForm } from './category.form';
import { Category } from '../shared/model/category.model';
import { CategoryCreat } from '../shared/model/create-category-model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  public Form1: categoryForm = new categoryForm();
  constructor(private categoryservice: CategoryService) {}
  public onFormSubmit() {
    const category: CategoryCreat = this.Form1.getModel();
    this.categoryservice.saveCategory(category).subscribe(() => {});
  }
}
