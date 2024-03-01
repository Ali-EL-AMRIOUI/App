import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitTimeComponent } from './transit-time.component';

describe('TransitTimeComponent', () => {
  let component: TransitTimeComponent;
  let fixture: ComponentFixture<TransitTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransitTimeComponent]
    });
    fixture = TestBed.createComponent(TransitTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
