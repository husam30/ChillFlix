import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private readonly catergoryService: CategoryService) {}
  public categories: Category[];
  ngOnInit() {
    this.getCategory();
  }
  public getCategory() {
    const allcars$ = this.catergoryService.getAllcategories();
    allcars$.subscribe(categories1 => {
      this.categories = categories1;
    });
  }
}
