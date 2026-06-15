import { Component, signal } from '@angular/core';
import { RegistrationForm } from './features/registration-form/registration-form';
import { RegistrationFormReactive } from './registration-form-reactive/registration-form-reactive';

@Component({
  selector: 'app-root',
  imports: [RegistrationForm, RegistrationFormReactive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('form-project');
}
