import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { Show } from '../model/show.model';
import { CreateShow } from '../model/create-show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private readonly endpiont1 = 'http://localhost:8080/get-one-show';
  private readonly endpiont2 = 'http://localhost:8080/save-show';
  private readonly endpiont3 = 'http://localhost:8080/get-show';
  private readonly endpiont4 = 'http://localhost:8080/edit-show';
  private readonly endpiont5 = 'http://localhost:8080/delete-show';
  private readonly endpiont6 = 'http://localhost:8080/get-favorite-shows';
  private readonly endpiont7 = 'http://localhost:8080/get-recently';
  private readonly endpiont8 = 'http://localhost:8080/get-most-viewd';
  private readonly endpiont9 = 'http://localhost:8080/get-liked-shows';

  constructor(private readonly http: HttpClient) {}

  public getOneShow(id: number): Observable<Show> {
    return this.http.get<Show>(this.endpiont1 + '/' + id);
  }
  public saveShow(show: CreateShow): Observable<void> {
    return this.http.post<void>(this.endpiont2, show);
  }
  public getRecentlyViewd(): Observable<Show[]> {
    return this.http.get<Show[]>(this.endpiont7);
  }
  public getMostViewd(): Observable<Show[]> {
    return this.http.get<Show[]>(this.endpiont8);
  }
  public getLikedShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.endpiont9);
  }
  public getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.endpiont3);
  }
  public getFavShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.endpiont6);
  }
  public editShow(show: Show): Observable<void> {
    return this.http.post<void>(this.endpiont4, show);
  }
  public deleteShow(show: Show): Observable<void> {
    return this.http.post<void>(this.endpiont5, show);
  }
}
