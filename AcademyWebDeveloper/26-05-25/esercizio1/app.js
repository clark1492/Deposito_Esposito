const functions = require("./gestioneTesto");
const numbFunctions = require("./gestioneNumeri");

const http = require("http");
const prompt = require("prompt-sync")();

let input = prompt("Inserisci un testo: ");

let numero = leggiNumero();
let numero2 = leggiNumero();

function leggiNumero() {
    let num;
    do {
        num = prompt("Inserisci un numero: ");
        if (isNaN(num)) {
            console.log("Per favore, inserisci un numero valido.");
        }
    } while (isNaN(num));
    return parseInt(num);
}

const server = http.createServer((req, res) => {

    /* charset=utf-8 per supportare caratteri speciali */
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("<h1>Funzioni di Gestione Testo</h1>");
    res.write(`<p>Testo originale: '${input}'</p>`);
    res.write(`<p>Testo in maiuscolo: '${functions.upperCase(input)}'</p>`);
    res.write(`<p>Numero di caratteri: ${functions.countCharacters(input)}</p>`);

    if (functions.containsCharacter(input, 'a')) {
        res.write("<p>Il testo contiene la lettera 'a'.</p>");
    } else {
        res.write("<p>Il testo non contiene la lettera 'a'.</p>");
    }
    if (numero !== null && numero2 !== null) {
        res.write(`<p>La somma di ${numero} e ${numero2} è: ${numbFunctions.somma(numero, numero2)}</p>`);
        res.write(`<p>La moltiplicazione di ${numero} e ${numero2} è: ${numbFunctions.moltiplica(numero, numero2)}</p>`);
    }else {
        res.write("<p>Non hai inserito un numero valido.</p>");
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});

