import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesteComponent } from './veste.component';

describe('VesteComponent', () => {
  let component: VesteComponent;
  let fixture: ComponentFixture<VesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VesteComponent]
    });
    fixture = TestBed.createComponent(VesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
