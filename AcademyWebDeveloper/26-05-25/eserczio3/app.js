const prompt = require("prompt-sync")();
const fs = require("fs");
const http = require("http");

function checkInput() {
    let scelta ="" ;
    do {
        scelta = prompt("Scegli tra a.Home b.InfoCreatore c.Calcolatrice : ");
        scelta = scelta.toLowerCase().trim();
    } while (scelta !== "a" && scelta !== "b" && scelta !== "c");
    return scelta;
}

function readFileHtml(file, res) {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Errore nel caricamento del file");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

let scelta = checkInput();

http.createServer((req, res) => {
    switch (scelta) {
        case "a":
            readFileHtml("home.html", res);
            break;
        case "b":
            readFileHtml("info.html", res);
            break;
        case "c":
            readFileHtml("calcolatrice.html", res);
            break;
    }
}).listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});
