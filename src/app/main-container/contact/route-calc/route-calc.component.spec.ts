import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCalcComponent } from './route-calc.component';

describe('RouteCalcComponent', () => {
  let component: RouteCalcComponent;
  let fixture: ComponentFixture<RouteCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
