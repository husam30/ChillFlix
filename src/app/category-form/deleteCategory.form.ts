import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from '../shared/model/show.model';
import { CategoryEdit } from '../shared/model/edit-category-model';
export class DeleteCategoryForm extends FormGroup {
  constructor() {
    super({
      CategoryID: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): CategoryEdit {
    return {
      id: this.controls.CategoryID.value,
      name: 'K'
    };
  }
}
