import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByIdComponent } from './get-book-by-id.component';

describe('GetBookByIdComponent', () => {
  let component: GetBookByIdComponent;
  let fixture: ComponentFixture<GetBookByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBookByIdComponent]
    });
    fixture = TestBed.createComponent(GetBookByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
