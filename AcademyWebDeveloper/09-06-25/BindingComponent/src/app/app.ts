import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './features/binding-component/binding-component';
import { ProductCardComponent } from "./features/product-card-component/product-card-component";

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BindingComponent');
}
