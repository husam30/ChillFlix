import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../shared/model/category.model';
import { CategoryCreat } from '../shared/model/create-category-model';

export class categoryForm extends FormGroup {
  constructor() {
    super({
      CategoryName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): CategoryCreat {
    return {
      name: this.controls.CategoryName.value
    };
  }
}
