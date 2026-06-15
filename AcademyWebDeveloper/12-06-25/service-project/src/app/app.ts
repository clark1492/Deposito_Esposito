import { Component, signal } from '@angular/core';
import { ShoppingListComponent } from './features/shopping-list-component/shopping-list-component';
import { AddItemComponent } from './features/add-item-component/add-item-component';
import { SettingsComponent } from "./features/settings-component/settings-component";
import { PreviewComponent } from "./features/preview-component/preview-component";

@Component({
  selector: 'app-root',
  imports: [AddItemComponent, ShoppingListComponent, SettingsComponent, PreviewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service-project');
}
