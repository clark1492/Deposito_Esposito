import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list-service';
@Component({
  selector: 'app-shopping-list-component',
  imports: [],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {

  service: ShoppingListService = inject(ShoppingListService);

  items: string[] = this.service.getItems();

  removeItem(index: number) {
    this.service.removeItem(index);
  }

}


// Esercizio 1 — Lista della Spesa
// Obiettivo: Usare un service per condividere stato e logica tra componenti.
// Istruzioni:
// Crea un service ShoppingListService e due componenti: AddItemComponent e ShoppingListComponent.
// Il service ShoppingListService:
// 1.Dichiara un signal items inizializzato a un array vuoto di stringhe usando signal([])
// 2.Espone un metodo addItem(nome: string) che usa .update() per aggiungere un elemento all'array
// 3.Espone un metodo removeItem(index: number) che rimuove un elemento per indice
// Il componente AddItemComponent:
// 1.Inietta il service con inject(ShoppingListService)
// 2.Mostra un campo <input> di testo e un pulsante "Aggiungi"
// 3.Al click, chiama addItem() del service con il valore dell'input e svuota il campo
// Il componente ShoppingListComponent:
// 1.Inietta lo stesso service
// 2.Mostra con @for tutti gli elementi presenti in items()
// 3.Affianca ogni elemento un pulsante "Rimuovi" che chiama removeItem()
