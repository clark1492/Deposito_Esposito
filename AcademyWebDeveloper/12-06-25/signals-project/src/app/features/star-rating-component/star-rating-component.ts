import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-rating-component.html',
  styleUrl: './star-rating-component.css',
})
export class StarRatingComponent {

  /* signal per indicare il numero di stelle */
  massimo = input<number>(5);

  /* signal per inviare il voto al padre */
  votoSelezionato = output<number>();

  /* funzione per inviare il voto al padre */
  inviaVoto(voto: number) {
    this.votoSelezionato.emit(voto);
  }
}

// Esercizio 2 — Valutazione con Stelle
// Obiettivo: Usare output() per far comunicare un componente figlio con il padre.
// Istruzioni:
// Crea due componenti: FeedbackComponent (padre) e StarRatingComponent (figlio).
// Il componente figlio StarRatingComponent:
// 1.Dichiara un input signal massimo inizializzato a 5 con input(5) che rappresenta il numero di stelle
// 2.Dichiara un output votoSelezionato usando output<number>()
// 3.Mostra nel template tante stelle quante indicate da massimo(), ognuna cliccabile
// 4.Al click su una stella, emette il numero corrispondente con votoSelezionato.emit(n)
// Il componente padre FeedbackComponent:
// 1.Include il componente figlio nel template
// 2.Si mette in ascolto dell'output con (votoSelezionato)="onVoto($event)"
// 3.Salva il voto ricevuto in una variabile e lo mostra nel template con un messaggio tipo: "Hai dato un voto di 4 su 5"
