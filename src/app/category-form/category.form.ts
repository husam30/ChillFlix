import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryCreat } from '../shared/model/create-category-model';

export class CategoryForm extends FormGroup {
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
