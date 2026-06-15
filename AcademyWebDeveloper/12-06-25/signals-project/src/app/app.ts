import { Component, signal } from '@angular/core';
import { ProductListComponent } from "./features/product-list-component/product-list-component";
import { FeedbackComponent } from "./features/feedback-component/feedback-component";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, FeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals-project');
}
