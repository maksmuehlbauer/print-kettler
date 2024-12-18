import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPartComponent } from './bottom-part.component';

describe('BottomPartComponent', () => {
  let component: BottomPartComponent;
  let fixture: ComponentFixture<BottomPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
