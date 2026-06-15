import { Component } from '@angular/core';
import { StarRatingComponent } from '../star-rating-component/star-rating-component';


@Component({
  selector: 'app-feedback-component',
  imports: [StarRatingComponent],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.css',
})
export class FeedbackComponent {
  voto = 0;
  massimo = 5;

  /* funzione per ricevere il voto dal figlio */
  onVoto(v: number) {
    this.voto = v;
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
