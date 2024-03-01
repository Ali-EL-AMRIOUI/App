import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaComponent } from './vma.component';

describe('VmaComponent', () => {
  let component: VmaComponent;
  let fixture: ComponentFixture<VmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VmaComponent]
    });
    fixture = TestBed.createComponent(VmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
