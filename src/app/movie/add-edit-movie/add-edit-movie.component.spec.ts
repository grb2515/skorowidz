import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditMovieComponent } from './add-edit-movie.component';

describe('AddEditMovieComponent', () => {
  let component: AddEditMovieComponent;
  let fixture: ComponentFixture<AddEditMovieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
