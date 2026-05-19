const prompt = require("prompt-sync")();

finished = false;

let array = [];

while (!finished) {

    let input = prompt("Inserisci un numero, digita 0 per finire:");
    if (!isNaN(input)) {
        if (input != 0)
            array.push(Number(input));
        else
            finished = true;
    }
    else
        console.log("Input non valido");

}
let pari = [];
let dispari = [];
let somma = 0;
let max;
let min;

for (let valore of array) {
    somma += valore;
    if (max === undefined)
        max = valore;
    if (min === undefined)
        min = valore;
    if (valore > max)
        max = valore;
    if (valore <= min)
        min = valore

    if (valore % 2 === 0)
        pari.push(valore);
    else
        dispari.push(valore);

}
if (array.length > 0) {
    console.log("L'array inserito è: ", array);
    console.log("L'array coi numeri pari è: ", pari);
    console.log("L'array coi numeri dispari è: ", dispari);
    console.log("La somma totale : ", somma);
    console.log("Il massimo è ", max, " Il minimo è ", min);
}
else
    console.log("L'array è vuoto")


let multiDim = [[],[]];

let stringInput = false;
let numbInput = false;
while (!stringInput) {

    let input = prompt("Inserisci una stringa, digita 0 per finire:");
    if (input != 0)
        multiDim[0].push((input));
    else
        stringInput = true;
}

while (!numbInput) { 
    let input = prompt("Inserisci un numero, digita 0 per finire:");
    if (!isNaN(input)) {
        if (input != 0)
            multiDim[1].push(Number(input));
        else
            numbInput = true;
    }
    else
        console.log("Input non valido");
}

console.log("Le stringhe : " ,multiDim[0]);
console.log("I numeri  : " ,multiDim[1]);