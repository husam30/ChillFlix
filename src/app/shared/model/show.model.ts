import { CreateShow } from './create-show.model';

/** A movie object */
export class Show extends CreateShow {
  public counter = 0;
  public id: number;
  public time: Date = new Date();
  public favoriteCounter = 0;
}
