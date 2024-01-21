import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsesrComponent } from './delete-usesr.component';

describe('DeleteUsesrComponent', () => {
  let component: DeleteUsesrComponent;
  let fixture: ComponentFixture<DeleteUsesrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUsesrComponent]
    });
    fixture = TestBed.createComponent(DeleteUsesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
