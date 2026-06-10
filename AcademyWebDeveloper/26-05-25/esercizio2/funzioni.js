const fs = require('fs');


function mostraMessaggio(nomeFile) {
    
    fs.readFile(nomeFile, 'utf8', (err, data) => {
        if (err) {
            console.error(`Errore nella lettura del file ${nomeFile}:`, err.message);
            return;
        }
        return data;
    });
}


module.exports = {
    mostraMessaggio
};