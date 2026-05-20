// SELEZIONE ELEMENTI

const titolo = document.getElementById("titolo");
const box = document.getElementById("box");
const input = document.getElementById("inputTesto");
const lista = document.getElementById("lista");

const aggiungiBtn = document.getElementById("aggiungiBtn");
const rimuoviBtn = document.getElementById("rimuoviBtn");
const titleBtn = document.getElementById("titleBtn");
const sfondoBtn = document.getElementById("sfondoBtn");
const nascondiBtn = document.getElementById("nascondiBtn");
const resetBtn = document.getElementById("resetBtn");

const contatore = document.getElementById("contatore");


// FUNZIONE CONTATORE

function aggiornaContatore() {
    // lista.children ritorna gli elementi child di lista quindi tutti gli li
    contatore.textContent =
        `Elementi presenti: ${lista.children.length}`;
}


// AGGIUNTA ELEMENTO

aggiungiBtn.addEventListener("click", () => {

    let testoInput = input.value;

    if (testoInput !== "") {

        // CREAZIONE LI
        const nuovoLi = document.createElement("li");

        // TESTO LI
        nuovoLi.textContent = testoInput;

        // definiammo qua i listener dei list item per questioni di scope

        // ELIMINAZIONE AL CLICK
        nuovoLi.addEventListener("click", () => {
            nuovoLi.remove();
            aggiornaContatore();
        });

        // MOUSEOVER
        nuovoLi.addEventListener("mouseover", () => {
            nuovoLi.style.fontSize = "22px";
        });

        nuovoLi.addEventListener("mouseout", () => {
            nuovoLi.style.fontSize = "16px";
        });

        // AGGIUNTA ALLA LISTA
        lista.appendChild(nuovoLi);

        // SVUOTA INPUT
        input.value = "";

        aggiornaContatore();
    }
});


// RIMOZIONE ULTIMO ELEMENTO

rimuoviBtn.addEventListener("click", () => {
    // ritorna l'ultimo elemento della lista
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
        aggiornaContatore();
    }
});


// CAMBIO COLORE TITOLO

titleBtn.addEventListener("click", () => {




    // MODIFICA TESTO TITOLO
    titolo.textContent = "Titolo Modificato";

    // COLORE CASUALE
    // Math.random crea numero randomico, Math.floor toglie i decimali, 16777215 = il valore massimo di un colore RGB in esadecimale, 
    // lo trasforma in esadecimale con toString(16) i colori RGB iniziano con #
    const coloreRandom =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    titolo.style.color = coloreRandom;



});

sfondoBtn.addEventListener("click", () => {
    // MODIFICA DIV
    // box.classList.toggle("box-sfondo");

    if (box.style.backgroundColor === "lightblue") {
        box.style.backgroundColor = "white";
        box.style.border = "2px solid transparent";
        
    } else {
        box.style.backgroundColor = "lightblue";
        box.style.border = "3px solid blue";
        box.style.fontSize = "22px";
    }
});

nascondiBtn.addEventListener("click", () => {
    // NASCONDI / MOSTRA
    if (box.style.display === "none") {
        box.style.display = "block";
        nascondiBtn.textContent = "Nascondi div"
    } else {
        box.style.display = "none";
        nascondiBtn.textContent = "Mostra div"
    }
});



// RESET STILI

resetBtn.addEventListener("click", () => {

    titolo.textContent = "Lista Dinamica";
    titolo.style.color = "black";

    box.style.backgroundColor = "white";
    box.style.border = "2px solid transparent";
    box.style.fontSize = "16px";
    box.style.display = "block";
});