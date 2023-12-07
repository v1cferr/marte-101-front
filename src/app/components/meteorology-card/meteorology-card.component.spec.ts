import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologyCardComponent } from './meteorology-card.component';

describe('MeteorologyCardComponent', () => {
  let component: MeteorologyCardComponent;
  let fixture: ComponentFixture<MeteorologyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteorologyCardComponent]
    });
    fixture = TestBed.createComponent(MeteorologyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
