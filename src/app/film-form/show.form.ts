import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from '../shared/model/show.model';
import { CreateShow } from '../shared/model/create-show.model';
export class ShowForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      releaseDate: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      movieCategory: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      url: new FormControl('', [Validators.maxLength(200)]),
      director: new FormControl('', [Validators.max(99)])
    });
  }

  /** Gets the model of this form */
  public getModel(): CreateShow {
    return {
      title: this.controls.title.value,
      releaseDate: this.controls.releaseDate.value,
      url: this.controls.url.value,
      director: this.controls.director.value,
      description: this.controls.description.value,
      movieCategory: this.controls.movieCategory.value,
      favoriteStatus: false
    };
  }
}
