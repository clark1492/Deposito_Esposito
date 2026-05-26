// Funzione esportata dal modulo
function saluta(nome) {
    return `Ciao ${nome}!`;
}

function addio(nome) {
    return `Addio ${nome}!`;
}

// Esporta la funzione saluta per renderla disponibile ad altri file
// Esporta anche la funzi
module.exports = saluta;