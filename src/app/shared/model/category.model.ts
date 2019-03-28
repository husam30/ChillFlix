import { Show } from './show.model';
import { CategoryCreat } from './create-category-model';

export class Category extends CategoryCreat {
  public id: number;
  public shows: Show[];
}
