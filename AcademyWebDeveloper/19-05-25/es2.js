const prompt = require("prompt-sync")();

function isParolaValida(parola) {
    return parola !== null && parola !== "fine";
}


function contaParole(lista) {
    return lista.length;
}

function trovaParolaPiuLunga(lista) {
    let piuLunga = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length > piuLunga.length) {
            piuLunga = lista[i];
        }
    }
    return piuLunga;
}

function trovaParolaPiuCorta(lista) {
    let piuCorta = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length < piuCorta.length) {
            piuCorta = lista[i];
        }
    }
    return piuCorta;
}

function contaInizioVocale(lista) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let contatore = 0;

    for (let i = 0; i < lista.length; i++) {
        let primoCarattere = lista[i][0];
        if (vocali.includes(primoCarattere)) {
            contatore++;
        }
    }
    return contatore;
}

function trasformaInMaiuscolo(lista) {
    let listaMaiuscola = [];
    for (let i = 0; i < lista.length; i++) {
        listaMaiuscola.push(lista[i].toUpperCase());
    }
    return listaMaiuscola;
}

function avviaProgramma() {
    let parole = [];
    let inserimento;

    do {
        inserimento = prompt("Inserisci una parola (o 'fine' per terminare):");

        if (isParolaValida(inserimento)) {
            parole.push(inserimento);
        }
    } while (inserimento !== null && inserimento !== "fine");

    if (parole.length === 0) {
        console.log("Non hai inserito nessuna parola valida.");
    }

    else {
        
        let totaleParole = contaParole(parole);
        let parolaLunga = trovaParolaPiuLunga(parole);
        let parolaCorta = trovaParolaPiuCorta(parole);
        let totaleVocali = contaInizioVocale(parole);
        let paroleInMaiuscolo = trasformaInMaiuscolo(parole);

        console.log("--- RISULTATI ---");
        console.log("Array originale:", parole);
        console.log("Numero totale di parole inserite:", totaleParole);
        console.log("Parola più lunga:", parolaLunga);
        console.log("Parola più corta:", parolaCorta);
        console.log("Numero di parole che iniziano con una vocale:", totaleVocali);
        console.log("Array in maiuscolo:", paroleInMaiuscolo);
    }
}

// Esecuzione del programma
avviaProgramma();