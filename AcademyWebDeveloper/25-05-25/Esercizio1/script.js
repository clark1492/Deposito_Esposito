// --- Riferimenti agli elementi del DOM ---
const temaButton = document.getElementById('temaButton');
const form = document.getElementById('userForm');
const username = document.getElementById('username');
const gameSelect = document.getElementById('gameSelect');
const gameInput = document.getElementById('gameInput');
const resetButton = document.getElementById('resetButton');
const userList = document.getElementById('userList');
const body = document.body;

/* ==========================================================================
   1. GESTIONE TEMA 
   ========================================================================== */
const temaSalvato = localStorage.getItem("tema");
if (temaSalvato === "light") {
    body.classList.add("light-theme");
}

temaButton.addEventListener("click", function () {
    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
        localStorage.setItem("tema", "light");
    } else {
        localStorage.setItem("tema", "dark");
    }
});

/* ==========================================================================
   2. CARICAMENTO DATI ALL'AVVIO
   ========================================================================== */
const utentiSalvatiString = localStorage.getItem("utente");
let listaUtenti = [];

if (utentiSalvatiString) {
    const datiEstratti = JSON.parse(utentiSalvatiString);
    
    // Controlliamo SE il dato estratto è effettivamente un Array
    if (Array.isArray(datiEstratti)) {
        listaUtenti = datiEstratti;
    } else {
        // Se non lo è (era un vecchio oggetto singolo), puliamo il localStorage per sicurezza
        localStorage.removeItem("utente");
    }
}

/* ==========================================================================
   3. GESTIONE INVIO FORM
   ========================================================================== */
form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Nuovo oggetto utente (senza email e password)
    const nuovoUtente = {
        username: username.value,
        piattaforma: gameSelect.value,
        giocoPreferito: gameInput.value
    };

    listaUtenti.push(nuovoUtente);
    localStorage.setItem("utente", JSON.stringify(listaUtenti));
    
    // Generiamo la card visiva
    addUserCard(
        nuovoUtente.username,
        nuovoUtente.piattaforma,
        nuovoUtente.giocoPreferito
    );

    form.reset(); 
});

/* ==========================================================================
   4. FUNZIONE CREAZIONE CARD (Aggiornata con i nuovi campi)
   ========================================================================== */
function addUserCard(username, piattaforma, giocoPreferito) {
    const card = document.createElement("li");
    card.classList.add("user-card");

    card.innerHTML = `
        <h3>${username}</h3>
        <p><strong>Piattaforma:</strong> ${piattaforma.toUpperCase()}</p>
        <p><strong>Gioco Preferito:</strong> ${giocoPreferito}</p>
    `;

    userList.appendChild(card);
}

/* ==========================================================================
   5. GESTIONE RESET
   ========================================================================== */
resetButton.addEventListener("click", function () {
    localStorage.removeItem("utente");
    listaUtenti = [];
    userList.innerHTML = "";
    form.reset();
});