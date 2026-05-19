const prompt = require("prompt-sync")();
let end = false;
let operazioni = [];

while (!end) {
    console.log("Scegli un operazione:");

    console.log("1.Addizione 2.Sottrazione 3.Moltiplicazione 4.Divisione 5.Esci");

    let input = prompt();
    let valori = [];
    let risultato;
    let stringa = "";

    switch (input) {
        case "1":
            valori = letturaValori();
            risultato = somma(valori);
            stringa = valori[0] + " + " + valori[1] + " = " + risultato;
            console.log(stringa);
            operazioni.push(stringa);
            
            break;
        case "2":
            valori = letturaValori();
            risultato = differenza(valori);
            stringa = valori[0] + " - " + valori[1] + " = " + risultato;
            console.log(stringa);
            operazioni.push(stringa);
            
            break;
        case "3":
            valori = letturaValori();
            risultato = prodotto(valori);
            stringa = valori[0] + " * " + valori[1] + " = " + risultato;
            console.log(stringa);
            operazioni.push(stringa);
            
            break;
        case "4":
            valori = letturaValori();
            risultato = divisione(valori);
            stringa = valori[0] + " / " + valori[1] + " = " + risultato;
            console.log(stringa);
            operazioni.push(stringa);
            
            break;
        case "5":
            end = true;
            break;
        default: console.log("Valore non valido");
    }
}

stampa(operazioni);


function letturaValori() {
    let array = [];
    let primo = controlloNumber("Inserisci primo numero:");
    let secondo = controlloNumber("Inserisci secondo numero:");
    array.push(primo);
    array.push(secondo);
    return array
}

function somma(numeri) {
    let somma = 0;
    for (let valore of numeri) {
        somma += valore;
    }

    return somma;
}

function differenza(numeri) {
    let diff = 0;
    for (let valore of numeri) {
        diff -= valore;
    }

    return diff;
}

function prodotto(numeri) {
    let prod = 1;
    for (let valore of numeri) {
        prod *= valore;
    }

    return prod;
}

function divisione(numeri) {
    return numeri[0] / numeri[1];
}

function stampa(operazioni) {
    console.log("Hai effettuato queste operazioni:")
    for(let valore of operazioni){
        console.log(valore);
    }
}

function controlloNumber(messaggio) {
    
    let string = prompt(messaggio);
    
    while(isNaN(string)) {
        console.log("Non è un numero");
        string = prompt(messaggio);
    }

    return Number(string);
}