import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from 'src/app/shared/model/show.model';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // @Output()
  // public categoryEmitter = new EventEmitter();

  @Input()
  public category: Category;
  constructor() {}

  ngOnInit() {}

  // public outPutMethodeCategory($event) {
  //   this.categoryEmitter.emit($event);
  // }
}
