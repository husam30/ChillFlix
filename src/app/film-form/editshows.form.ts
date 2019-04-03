import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from '../shared/model/show.model';
export class ShowForm1 extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', [Validators.maxLength(100)]),
      releaseDate: new FormControl('', [Validators.maxLength(100)]),
      description: new FormControl(''),
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
      favoriteCounter: 0,
      counter: 0,
      time: new Date(2015, 0o5, 0o5, 17, 23, 42, 11),
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
