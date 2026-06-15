import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../core/services/user-preferences-service';
@Component({
  selector: 'app-preview-component',
  imports: [],
  templateUrl: './preview-component.html',
  styleUrl: './preview-component.css',
})
export class PreviewComponent {

   service: UserPreferencesService = inject(UserPreferencesService);

}

// Esercizio 2 — Preferenze Utente
// Obiettivo: Usare un service per gestire uno stato globale accessibile da componenti diversi.
// Istruzioni:
// Crea un service UserPreferencesService e due componenti: SettingsComponent e PreviewComponent.
// Il service UserPreferencesService:
// 1.Dichiara un signal username inizializzato a 'Ospite'
// 2.Dichiara un signal temaScuro inizializzato a false
// 3.Espone un metodo setUsername(nome: string) che aggiorna il signal con .set()
// 4.Espone un metodo toggleTema() che inverte il valore booleano di temaScuro con .update()
// Il componente SettingsComponent:
// 1.Inietta il service
// 2.Mostra un <input> di testo per modificare lo username e chiama setUsername() ad ogni modifica con (input)
// 3.Mostra un pulsante "Attiva/Disattiva tema scuro" che chiama toggleTema()
// Il componente PreviewComponent:
// 1.Inietta lo stesso service
// 2.Mostra un messaggio tipo: "Benvenuto, Marco!" usando il signal username()
// 3.Applica una classe CSS dark al proprio contenitore in modo condizionale con [class.dark]="service.temaScuro()
