import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card-component',
  imports: [FormsModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {

  name: string = 'Zaino da Montagna';
  brand: string = 'AlpinePro';
  price:number = 80.90;
  discount: number = 0.20;
  stock: number = 2;
  imageUrl: string = 'https://img01.ztat.net/article/spp-media-p1/99efee9777e94443a9f0f6854aa5f037/e8b8faab3f474aed9bc3feaa16e0e34c.jpg?imwidth=762&filter=packshot';
  tags: string[] = ['Outdoor', 'Sport', 'Impermeabile'];
  available: boolean = true;

  compra(): void {
    this.available = false;
    this.stock -= 1;
  }

  finalPrice(): number {
    return this.price - (this.price * this.discount);
  }
}
