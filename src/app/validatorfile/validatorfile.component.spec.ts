import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorfileComponent } from './validatorfile.component';

describe('ValidatorfileComponent', () => {
  let component: ValidatorfileComponent;
  let fixture: ComponentFixture<ValidatorfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
