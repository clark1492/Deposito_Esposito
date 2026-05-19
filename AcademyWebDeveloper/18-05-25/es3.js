// Scrivere un programma in JavaScript che chieda all’utente di inserire
// un numero intero positivo N. 

// Il programma deve utilizzare un ciclo per analizzare tutti i numeri da
// 1 a N e contare quanti di questi sono pari e quanti sono dispari. A

// l termine, deve stampare in output il numero totale di valori pari e
// dispari trovati. 

// Se l’utente inserisce un valore non valido (ad esempio un numero
// negativo o non numerico), il programma deve segnalarlo tramite un
// messaggio di errore.


const prompt = require("prompt-sync")();

input = false;
end = false;
while (!end) {
    let n;
    while (!input) {
        n = Number(prompt("Inserisci un numero intero positivo N: "));


        if (n === null || n <= 0) {
            console.log("Errore Inserisci valore valido ");
        }
        else
            input = true;
    }


    let pari = 0;
    let dispari = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pari++;
        } else {
            dispari++;
        }
    }

    console.log("Numeri pari trovati:", pari);
    console.log("Numeri dispari trovati:", dispari);
    let check = prompt("Hai finito?");
    input = false;

    if (check === "si") {
        end = true;
    }

}
