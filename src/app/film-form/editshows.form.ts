import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from '../shared/model/show.model';
export class ShowForm1 extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', [Validators.maxLength(100)]),
      releaseDate: new FormControl('', [Validators.maxLength(100)]),
      description: new FormControl('', [Validators.maxLength(100)]),
      movieCategory: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ]),
      movieId: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ]),
      url: new FormControl('', [Validators.maxLength(200)]),
      director: new FormControl('', [Validators.max(99)])
    });
  }

  /** Gets the model of this form */
  public getModel(): Show {
    return {
      id: this.controls.movieId.value,
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
