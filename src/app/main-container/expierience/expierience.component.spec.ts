import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpierienceComponent } from './expierience.component';

describe('ExpierienceComponent', () => {
  let component: ExpierienceComponent;
  let fixture: ComponentFixture<ExpierienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpierienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpierienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
