const prompt = require("prompt-sync")();

let stringa = prompt("Inserisci una stringa: ");

// ESEMPIO USO CALLBACK
operazioneConCallback(stringa => {
    //split divide la stringa in un array di caratteri, 
    // reverse inverte l'ordine degli elementi dell'array e 
    // join unisce gli elementi dell'array in una nuova stringa
    if (stringa === "") {
        console.error("Errore: La stringa non può essere vuota");
        return;
    }
    let risultato = stringa.split("").reverse().join("");
    console.log("Esempio di callback:", risultato);
});

// ESEMPIO USO PROMISE
operazioneConPromise(stringa)
    .then(risultato => {
        console.log("Esempio di Promise:", risultato);
    })
    .catch(errore => {
        console.error("Errore:", errore.message);
    });

// ESEMPIO USO ASYNC/AWAIT
operazioneConAsyncAwait(stringa);

// ESEMPIO USO PROMISE CONCATENATA
operazioneConPromise(stringa)
    .then(risultato => {
        return operazioneConPromiseConcatenata(risultato);
    }).then(risultato => {
        console.log("Esempio di Promise concatenata:", risultato);
    }).catch(errore => {
        console.error("Errore:", errore.message);
    });

// ESEMPIO USO ASYNC/AWAIT CON PROMISE CONCATENATA
operazioneConAsyncAwaitConPromiseConcatenata(stringa);


// CALLBACK
function operazioneConCallback(callbackInvertiStringa) {
    setTimeout(() => {
        callbackInvertiStringa(stringa);
    }, 1500);
}

// PROMISE
function operazioneConPromise(stringa) {
    return new Promise((resolve, reject) => {
        if (stringa === "") {
            reject(new Error("La stringa non può essere vuota"));
        }
        else {
            setTimeout(() => {
                let risultato = stringa.split("").reverse().join("");
                resolve(risultato);
            }, 1500);
        }
    }
    );
}
// PROMISE CONCATENATA
function operazioneConPromiseConcatenata(stringaRisultato) {
    return new Promise((resolve, reject) => {
        if (stringaRisultato === "") {
            reject(new Error("La stringa non può essere vuota"));
        }
        else {
            setTimeout(() => {
                let risultato = stringaRisultato.toUpperCase();
                resolve(risultato);
            }, 1500);
        }
    })
}

// ASYNC / AWAIT
async function operazioneConAsyncAwait(stringa) {
    try {
        let risultato = await operazioneConPromise(stringa);
        console.log("Esempio di Async/Await:", risultato);
    } catch (errore) {
        console.error("Errore:", errore.message);
    }

}

// ASYNC / AWAIT CON PROMISE CONCATENATA
async function operazioneConAsyncAwaitConPromiseConcatenata(stringa) {
    try {
        let risultato = await operazioneConPromise(stringa);
        risultato = await operazioneConPromiseConcatenata(risultato);
        console.log("Esempio di Async/Await con Promise concatenata:", risultato);
    } catch (errore) {
        console.error("Errore:", errore.message);
    }
 }