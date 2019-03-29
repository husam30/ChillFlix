import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFilmsComponent } from './favorite-films.component';

describe('FavoriteFilmsComponent', () => {
  let component: FavoriteFilmsComponent;
  let fixture: ComponentFixture<FavoriteFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
