import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/shared/model/show.model';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input()
  public category: Category;
  constructor() {}

  ngOnInit() {}
}
