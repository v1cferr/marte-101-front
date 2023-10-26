import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessWindowComponent } from './success-window.component';

describe('SuccessWindowComponent', () => {
  let component: SuccessWindowComponent;
  let fixture: ComponentFixture<SuccessWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessWindowComponent]
    });
    fixture = TestBed.createComponent(SuccessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
