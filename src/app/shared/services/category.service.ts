import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { Show } from '../model/show.model';
import { CategoryCreat } from '../model/create-category-model';
import { CategoryEdit } from '../model/edit-category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly endpiont = 'http://localhost:8080/get-category';
  private readonly endpiont1 = 'http://localhost:8080/save-category';
  private readonly endpiont2 = 'http://localhost:8080/edit-category';
  private readonly endpiont3 = 'http://localhost:8080/delete-category';

  constructor(private readonly http: HttpClient) {}

  public getAllcategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.endpiont);
  }
  public saveCategory(category: CategoryCreat): Observable<void> {
    return this.http.post<void>(this.endpiont1, category);
  }
  public deleteCat(category: CategoryEdit): Observable<void> {
    return this.http.post<void>(this.endpiont3, category);
  }

  public editCategory(category: CategoryEdit): Observable<void> {
    return this.http.post<void>(this.endpiont2, category);
  }
}
