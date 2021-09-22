import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowMovieComponent } from './show-movie.component';

describe('ShowMovieComponent', () => {
  let component: ShowMovieComponent;
  let fixture: ComponentFixture<ShowMovieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
