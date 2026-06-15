import { Component,computed, signal} from '@angular/core';

@Component({
  selector: 'app-price-component',
  imports: [],
  templateUrl: './price-component.html',
  styleUrl: './price-component.css',
})
export class PriceComponent {

  prezzoNetto = signal(100);

  aliquotaIva = signal(22);

  prezzoLordo = computed(() => this.prezzoNetto() * (1 + this.aliquotaIva()/ 100));

  updatePrice(event:Event):void {
    const input = event.target as HTMLInputElement
    const num = parseFloat(input.value)
    this.prezzoNetto.set(num);
  }
}



// 3.Crea un signal prezzoLordo con computed() che calcola automaticamente: prezzoNetto() * (1 + aliquotaIva() / 100)
// 4.Mostra nel template tutti e tre i valori: prezzo netto, aliquota IVA e prezzo lordo
// 5.Aggiunge un input <input type="number"> collegato a prezzoNetto tramite un event binding (input) che chiama .set() con il
// nuovo valore
