import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../shared/module/show.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input()
  public show: Show;

  public filmWidth = 240;
  public filmHeight = 160;
}
