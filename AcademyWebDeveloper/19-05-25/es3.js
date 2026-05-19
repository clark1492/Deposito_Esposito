const prompt = require("prompt-sync")();

function avviaProgramma() {
    let arrayProdotti = [];
    let finito = false;
    console.log("Inserisci i prodotti di un catalogo di un magazzino.");
    try {
        while (!finito) {

            finito = checkBoolean("Vuoi aggiungere un nuovo prodotto? (si/no)");

            if (!finito) {

                let nomeProdotto = checkParola("Nome prodotto:");
                let prezzoProdotto = checkFloatPositivo("Prezzo del prodotto:");
                let quantitaProdotto = checkInteroPositivo("Quantita del prodotto:");

                let prodotto = creaOggetto(nomeProdotto, prezzoProdotto, quantitaProdotto);
                arrayProdotti.push(prodotto);
                // finito = checkBoolean("Hai terminato? (si/no)");
            }
        }

        let valoreTot = calcolaValoreTot(arrayProdotti);
        let prodottoCaro = trovaProdottoCaro(arrayProdotti);
        let arrayProdottiPositivi = filtraQuantitaPositiva(arrayProdotti);
        let nomiProdotti = arrayNomi(arrayProdotti);


        console.log("Il valore totale del magazzino è : ", valoreTot, " $");
        console.log("Il prodotto più caro del magazzino è : ", prodottoCaro.nome, " ", prodottoCaro.prezzo, " $");

        aggiuntaDisponibilita(arrayProdotti);


        console.log("Prodotti disponibili nel magazzino : ");
        arrayProdottiPositivi.forEach(prodotto => {
            console.log(prodotto);
        });

        console.log("La lista dei prodotti (solo nomi) : ");
        nomiProdotti.forEach(prodotto => {
            console.log(prodotto);
        });
    } catch (errore) {
        console.log("Non inserito nessun valore.")
    }
    console.log("Programma Terminato.")
}

avviaProgramma();

function arrayNomi(arrayProdotti) {
    checkEmptyArray(arrayProdotti);

    let nomiProdotti = [];

    for (let prodotto of arrayProdotti) {
        nomiProdotti.push(prodotto.nome);
    }

    return nomiProdotti;
}

function calcolaValoreTot(arrayProdotti) {
    checkEmptyArray(arrayProdotti);

    let tot = 0;
    for (let prodotto of arrayProdotti) {
        tot += prodotto.prezzo * prodotto.quantita;
    }

    return tot;
}

function trovaProdottoCaro(arrayProdotti) {
    checkEmptyArray(arrayProdotti);

    let prodottoCaro = arrayProdotti[0];

    for (let prodotto of arrayProdotti) {
        if (prodotto.prezzo > prodottoCaro.prezzo) {
            prodottoCaro = prodotto;
        }

    }
    return prodottoCaro;
}

function filtraQuantitaPositiva(arrayProdotti) {

    checkEmptyArray(arrayProdotti);

    let prodottiPresenti = [];

    for (let prodotto of arrayProdotti) {
        if (prodotto.quantita > 0) {
            prodottiPresenti.push(prodotto);
        }

    }

    return prodottiPresenti;

}

function aggiuntaDisponibilita(arrayProdotti) {

    for (let prodotto of arrayProdotti) {
        if (prodotto.quantita > 0) {
            prodotto.disponibilita = true;
        }
        else {
            prodotto.disponibilita = false;
        }
    }
}

function creaOggetto(nomeProdotto, prezzoProdotto, quantitaProdotto) {
    let prodotto = {
        nome: nomeProdotto,
        prezzo: prezzoProdotto,
        quantita: quantitaProdotto
    }

    return prodotto;
}

function checkBoolean(messaggio) {
    let parola;

    do {
        parola = prompt(messaggio);
    }
    while (parola.trim().toLowerCase() !== "si" && parola.trim().toLowerCase() != "no");

    return parola === "si" ? false : true;
}
// controlla che si sia digitata una parola e non un spazio bianco
function checkParola(messaggio) {

    let parola;

    do {
        parola = prompt(messaggio);
    }
    while (parola === null || parola === "");
    return parola;
}
// controlla che si sia digitato un numero intero positivo
function checkInteroPositivo(messaggio) {
    let input;

    do {
        input = parseInt(prompt(messaggio));
    } while (isNaN(input) || input < 0);

    return input;
}

// controlla che si sia digitato un numero con la virgola positivo
function checkFloatPositivo(messaggio) {

    let numero;

    do {
        numero = parseFloat(prompt(messaggio));
    }
    while (isNaN(numero) || numero < 0);

    return numero;
}

// controlla che un array sia pieno
function checkEmptyArray(array) {
    if (array.length === 0) {
        throw new Error("Array vuoto");
    }
}