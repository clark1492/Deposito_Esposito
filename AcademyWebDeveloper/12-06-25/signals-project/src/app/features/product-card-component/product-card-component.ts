import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {

  nome = input<string>('');
  prezzo = input<number>(0);
  disponibile = input<boolean>(false);
}

// Esercizio 1 — Scheda Prodotto
// Obiettivo: Passare dati da un componente padre a un componente figlio usando input().
// Istruzioni:
// Crea due componenti: ProductListComponent (padre) e ProductCardComponent (figlio).
// Il componente figlio ProductCardComponent:
// 1.Dichiara tre input signal: nome , prezzo e disponibile (booleano) usando input()
// 2.Mostra nel template il nome, il prezzo e la scritta "Disponibile" oppure "Esaurito" in base al valore di disponibile()
// Il componente padre ProductListComponent:
// 1.Dichiara un array di 3 prodotti (oggetti con nome, prezzo, disponibile)
// 2.Usa @for per iterare sui prodotti e passa i valori al figlio tramite property binding: [nome], [prezzo], [disponibile]
