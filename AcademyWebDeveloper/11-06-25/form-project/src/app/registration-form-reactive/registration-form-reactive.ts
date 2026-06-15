import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form-reactive.html',
  styleUrl: './registration-form-reactive.css',
})
export class RegistrationFormReactive {
  mailForm: FormGroup = new FormGroup({
    oggetto: new FormControl<string>('', Validators.required),
    messaggio: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    urgenza: new FormControl<string>('', Validators.required),
  });

  submitted: boolean = false;

  onSubmit(): void {
    if (this.mailForm.valid) {
      this.submitted = true
      console.log(this.mailForm.value);
    }
  }
}

