import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from '../shared/model/show.model';
export class ShowForm2 extends FormGroup {
  constructor() {
    super({
      movieId: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): Show {
    return {
      id: this.controls.movieId.value,
      title: 'samer',
      releaseDate: 1,
      url: 's',
      director: 's',
      description: 's',
      movieCategory: 's',
      favoriteStatus: false
    };
  }
}
