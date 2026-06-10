// =====================================
// IMPORTAZIONE MODULI
// =====================================

// Modulo HTTP
const http = require("http");

// Modulo File System
const fs = require("fs");

// Input da console
const prompt = require("prompt-sync")();



// =====================================
// SCELTA FILE
// =====================================

// Chiedo quale file leggere
let scelta = prompt("Scrivi html oppure txt: ");



// =====================================
// SCELTA PERCORSO FILE
// =====================================

let file;

let contentType;



if (scelta === "html") {

    file = "messaggio.html";

    contentType = "text/html";

} else if (scelta === "txt") {

    file = "messaggio.txt"; // voledo si può personalizzare anche la scelta de nome

    contentType = "text/plain";

} else {

    console.log("Scelta non valida");

    return;

}



// =====================================
// CREAZIONE SERVER
// =====================================

http.createServer(function (req, res) {

    // Leggo contenuto file
    let contenuto = fs.readFileSync(file, "utf8");



    // Header risposta
    res.writeHead(200, {

        "Content-Type": contentType

    });



    // Invio contenuto
    res.write(contenuto);



    // Fine risposta
    res.end();



// =====================================
// AVVIO SERVER
// =====================================

}).listen(3000, function () {

    console.log("Server avviato su http://localhost:3000");

});