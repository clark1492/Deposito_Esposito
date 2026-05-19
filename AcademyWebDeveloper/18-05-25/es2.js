const prompt = require("prompt-sync")();

console.log("1.player 2. moderator 3.admin")

let scelta1 = prompt(`Inserisci ruolo: `);

switch (scelta1) {

    case "1":
        console.log("PLAYER ");
        break;

    case "2":
        console.log("MODERATOR");
        break;

    case "3":
        console.log("ADMIN");
        break;

    default:
        console.log("NON AMMESSO.");
}

console.log("1.player 2. moderator 3.admin")
let scelta2 = prompt(`Inserisci ruolo: `);

switch (scelta2) {

    case "1":
        console.log("PLAYER ");
        break;

    case "2":
        console.log("MODERATOR");
        break;

    case "3":
        console.log("ADMIN");
        break;

    default:
        console.log("NON AMMESSO.");
}

console.log("1.player 2. moderator 3.admin")
let scelta3 = prompt(`Inserisci ruolo: `);

switch (scelta3) {

    case "1":
        console.log("PLAYER ");
        break;

    case "2":
        console.log("MODERATOR");
        break;

    case "3":
        console.log("ADMIN");
        break;

    default:
        console.log("NON AMMESSO.");
}

if ((scelta1 == 1 || scelta2 == 1 || scelta3 == 1) && (scelta1 == 2 || scelta2 == 2 || scelta3 == 2)) {
    console.log("Hai ruolo PLAYER e MODERATOR");
}



if (scelta1 == 3 || scelta2 == 3 || scelta3 == 3) {
    console.log("Hai provilegi ADMIN");
}