console.log("Menu");
console.log("Scegli un piatto:");
console.log("1.Pasta");
console.log("2.Carne");
console.log("3.Pesce");

const prompt = require("prompt-sync")();

let scelta1 = prompt("Inserisci la tua scelta: ");
let scelta2;
switch (scelta1) {
    case "1":
        console.log("Scegli un condimento:");
        console.log("1.Al sugo");
        console.log("2.Al pesto");
        scelta2 = prompt("Inserisci la tua scelta: ");
        break;

    case "2":
        console.log("Scegli un condimento:");
        console.log("1.Con patate");
        console.log("2.Con Insalata");
        scelta2 = prompt("Inserisci la tua scelta: ");
        break;

    case "3":
        console.log("Scegli un condimento:");
        console.log("1.Con zucchine");
        console.log("2.Semplice con limone");
        scelta2 = prompt("Inserisci la tua scelta: ");
        break;
    default:
        break;
}

let piatto;
let condimento;

let messaggio = "Hai ordinato "

if(scelta1 == 1){
    piatto = "Pasta"
    if(scelta2 == 1){
        condimento = " col sugo "
    }
    if(scelta2 == 2){
        condimento = " col pesto "
    }
}
if (scelta1 == 2) {
    piatto = "Carne"
    if(scelta2 == 1){
        condimento = " con patate "
    }
    if(scelta2 == 2){
        condimento = " con Insalata "
    }
}
if (scelta1 == 3) {
    piatto = "Pesce"
    if(scelta2 == 1){
        condimento = " con zucchine "
    }
    if(scelta2 == 2){
        condimento = " con limone "
    }
}

console.log("Hai scelto " + piatto + condimento);