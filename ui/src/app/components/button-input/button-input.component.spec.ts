import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInputComponent } from './button-input.component';

describe('ButtonInputComponent', () => {
  let component: ButtonInputComponent;
  let fixture: ComponentFixture<ButtonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
