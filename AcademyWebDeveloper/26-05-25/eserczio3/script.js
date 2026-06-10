const form = document.querySelector("form");
let body = document.querySelector("body");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operazione = document.getElementById("operazione");

function calcola() {
    let num1 = parseInt(numero1.value);
    console.log(num1);
    let num2 = parseInt(numero2.value);
    console.log(num2);
    let op = operazione.value;
    let res;

    switch (op) {

        case "addizione":
            res = num1 + num2;
            break;
        case "sottrazione":
            res = num1 - num2;
            break;
        case "moltiplicazione":
            res = num1 * num2;
            break;
        case "divisione":
            res = num1 / num2;
            break;
        default:
            res = "Operazione non valida";
    }
    body.innerHTML += `<p>Il risultato di ${num1} ${op} ${num2} è: ${res}</p>`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    calcola();
});