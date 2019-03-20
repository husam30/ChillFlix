import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsComponent } from './films.component';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

<script src='https://www.youtube.com/iframe_api' />;
<script src='angular-youtube-embed.js' />;
