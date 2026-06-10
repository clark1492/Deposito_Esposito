import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule],
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
})
export class BindingComponent {
  // Interpolation Binding
  username: string = 'Marco';
  num: number = 0;
  // Property Binding

  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageWidth: number = 100;
  imageHeight: number = 100;

  // Event Binding

  currentMsg: string = 'Buongiorno';
  messages: string[] = ['Buongiorno', 'Buon pomeriggio', 'Buonasera'];
  index: number = 0;

  saluta(): void {
    this.index += 1;
    if (this.index >= this.messages.length) {
      this.index = 0;
    }
    this.currentMsg = this.messages[this.index];
  }

  // Two-Way Binding
  resetUsername(): void {
    this.username = '';
  }
}
