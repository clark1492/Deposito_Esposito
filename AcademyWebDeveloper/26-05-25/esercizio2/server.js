const funzioni = require('./funzioni');

console.log("Avvio dell'applicazione Node.js...\n");

// Eseguiamo la funzione esportata per il file TXT
funzioni.mostraMessaggio('messaggio.txt');

// Eseguiamo la funzione esportata per il file HTML
funzioni.mostraMessaggio('messaggio.html');