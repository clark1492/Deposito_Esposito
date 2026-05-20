let bottone = document.getElementById("btn");
let output = document.getElementById("output");
let nome = document.getElementById("nome");
let ruolo = document.getElementById("ruolo");


// PROMISE
function operazioneConPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let user = {
                nome : nome.value,
                ruolo : ruolo.value,
                stato : "attivo"
            };
            resolve(user);
        }, 2000);
    });
}

// ASYNC / AWAIT
async function caricaDati() {
    output.textContent = "Caricamento in corso...";
    output.classList.toggle("output-change");

    try {
        let risultato = await operazioneConPromise();
        output.textContent = risultato.nome + " " + risultato.ruolo + " " + risultato.stato;
        output.classList.toggle("output-success");
    } catch (errore) {
        output.textContent = "Errore nel caricamento";
    }
}

bottone.addEventListener("click", function() {
    caricaDati();
});
