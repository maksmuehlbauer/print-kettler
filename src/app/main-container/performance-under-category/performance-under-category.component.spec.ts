import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceUnderCategoryComponent } from './performance-under-category.component';

describe('PerformanceUnderCategoryComponent', () => {
  let component: PerformanceUnderCategoryComponent;
  let fixture: ComponentFixture<PerformanceUnderCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceUnderCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceUnderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
