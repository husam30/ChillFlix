import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { Show } from '../model/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private readonly endpiont1 = 'http://localhost:8080/get-one-show';
  private readonly endpiont2 = 'http://localhost:8080/save-show';
  constructor(private readonly http: HttpClient) {}

  public getOneShow(id: number): Observable<Show> {
    return this.http.get<Show>(this.endpiont1 + '/' + id);
  }
  public saveShow(show: Show): Observable<void> {
    return this.http.post<void>(this.endpiont2, show);
  }
}