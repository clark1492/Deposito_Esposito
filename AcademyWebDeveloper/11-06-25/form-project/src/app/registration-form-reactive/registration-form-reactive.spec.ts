import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormReactive } from './registration-form-reactive';

describe('RegistrationFormReactive', () => {
  let component: RegistrationFormReactive;
  let fixture: ComponentFixture<RegistrationFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFormReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationFormReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
