import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm
{
  utente = {nome: '', email:'',eta:''}
  submitted: boolean = false
  onSubmit(form: any): void{
    if (form.valid) {
      console.log(form.value);
      this.submitted = true
    }

  }
}
