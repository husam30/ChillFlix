import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../shared/model/category.model';
import { CategoryEdit } from '../shared/model/edit-category-model';

export class EditCategoryForm extends FormGroup {
  constructor() {
    super({
      editCategoryName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      CategoryID: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): CategoryEdit {
    return {
      name: this.controls.editCategoryName.value,
      id: this.controls.CategoryID.value
    };
  }
}
