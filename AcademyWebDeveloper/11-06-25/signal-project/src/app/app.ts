import { Component, signal } from '@angular/core';
import { TrafficLightComponent } from './features/traffic-light-component/traffic-light-component';
import { PriceComponent } from './features/price-component/price-component';


@Component({
  selector: 'app-root',
  imports: [TrafficLightComponent,PriceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal-project');
}
