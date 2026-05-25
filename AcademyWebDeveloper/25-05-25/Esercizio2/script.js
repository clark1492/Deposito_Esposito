/* ==========================================================================
   TOYSTORE LOGIC - Gestione centralizzata del Negozio di Giocattoli
   ========================================================================== */


document.addEventListener('DOMContentLoaded', function () {

    // Rileva automaticamente quale pagina è attiva cercando gli elementi specifici
    const toyForm = document.getElementById('toyForm');
    const contenitoreCatalogo = document.getElementById('contenitoreCatalogo');
    const dashboardPresente = document.getElementById('totaleGiocattoli');

    // --- FUNZIONE UTILITARIE ---
    function getCatalogo() {
        const datiSalvati = localStorage.getItem('catalogoGiocattoli');
        return datiSalvati ? JSON.parse(datiSalvati) : [];
    }

    function salvaCatalogo(catalogo) {
        localStorage.setItem('catalogoGiocattoli', JSON.stringify(catalogo));
    }


    /* ==========================================================================
       PAGINA 1: INSERIMENTO (index.html)
       ========================================================================== */
    if (toyForm) {
        toyForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Impedisce il ricaricamento della pagina

            // Raccolta dati dal form
            const nome = document.getElementById('nome').value;
            const categoria = document.getElementById('categoria').value;
            const prezzo = parseFloat(document.getElementById('prezzo').value);
            const eta = document.getElementById('eta').value;
            const disponibile = document.getElementById('disponibile').checked;

            // Creazione oggetto giocattolo
            const nuovoGiocattolo = {
                nome: nome,
                categoria: categoria,
                prezzo: prezzo,
                eta: eta,
                disponibile: disponibile
            };

            // Recupero, aggiornamento e salvataggio
            const catalogo = getCatalogo();

            catalogo.push(nuovoGiocattolo);
            salvaCatalogo(catalogo);

            // Reset del form e feedback grafico temporaneo
            toyForm.reset();
            const feedback = document.getElementById('feedback');
            feedback.textContent = "🎈 Giocattolo salvato nello scrigno!";
        });
    }


    /* ==========================================================================
       PAGINA 2: CATALOGO (catalogo.html)
       ========================================================================== */
    if (contenitoreCatalogo) {
        const catalogo = getCatalogo();

        if (catalogo.length === 0) {
            contenitoreCatalogo.innerHTML = '<p class="vuoto">💨 Lo scaffale è vuoto! Corri ad aggiungere dei giocattoli!</p>';
            return;
        }

        // Costruzione dinamica della tabella
        let htmlTabella = `
            <table>
                <thead>
                    <tr>
                        <th>Nome Giocattolo</th>
                        <th>Categoria</th>
                        <th>Prezzo</th>
                        <th>Età Consigliata</th>
                        <th>Stato Scorta</th>
                    </tr>
                </thead>
                <tbody>
        `;

        catalogo.forEach(giocattolo => {
            const badgeStato = giocattolo.disponibile
                ? '<span class="badge dispo">Disponibile si!</span>'
                : '<span class="badge esaurito">Finito! 😢</span>';

            htmlTabella += `
                <tr>
                    <td><strong>⭐ ${giocattolo.nome}</strong></td>
                    <td>${giocattolo.categoria}</td>
                    <td><span class="prezzo-tag">${giocattolo.prezzo.toFixed(2)} €</span></td>
                    <td>👶 ${giocattolo.eta}</td>
                    <td>${badgeStato}</td>
                </tr>
            `;
        });

        // Chiusura della tabella e inserimento nel DOM
        htmlTabella += `</tbody></table>`;
        contenitoreCatalogo.innerHTML = htmlTabella;
    }


    /* ==========================================================================
       PAGINA 3: RIEPILOGO (riepilogo.html)
       ========================================================================== */
    if (dashboardPresente) {
        const catalogo = getCatalogo();

        if (catalogo.length === 0) {
            document.getElementById('listaCategorie').innerHTML = "<em>Nessun dato</em>";
            document.getElementById('listaNonDisponibili').innerHTML = "<em>Nessun dato</em>";
            return;
        }

        // 1. Conteggio totale
        document.getElementById('totaleGiocattoli').textContent = "📦 " + catalogo.length;

        let sommaPrezzi = 0;

        // 2. Giriamo dentro ogni gioco del catalogo e aggiungiamo il prezzo alla somma
        catalogo.forEach(gioco => {
            sommaPrezzi += gioco.prezzo;
        });
        const media = sommaPrezzi / catalogo.length;

        document.getElementById('prezzoMedio').textContent = `💰 ${media.toFixed(2)} €`;

        // Creiamo un array vuoto che conterrà le categorie senza duplicati
        const categorieUniche = [];

        // 2. Giriamo tra tutti i giochi del catalogo
        catalogo.forEach(gioco => {
            // Se la categoria del gioco NON è ancora presente nel nostro array...
            if (!categorieUniche.includes(gioco.categoria)) {
                // ...allora la aggiungiamo!
                categorieUniche.push(gioco.categoria);
            }
        });

        // 3. Generiamo l'HTML della lista (esattamente come prima)
        const contenitoreCategorie = document.getElementById('listaCategorie');
        let htmlCategorie = '<ul>';
        categorieUniche.forEach(cat => {
            htmlCategorie += `<li>${cat}</li>`;
        });
        htmlCategorie += '</ul>';

        // 4. Inseriamo la lista nella pagina
        contenitoreCategorie.innerHTML = htmlCategorie;

        // 4. Filtraggio e render dei prodotti esauriti
        const prodottiEsauriti = catalogo.filter(gioco => !gioco.disponibile);
        const contenitoreEsauriti = document.getElementById('listaNonDisponibili');

        if (prodottiEsauriti.length > 0) {
            let htmlEsauriti = '<ul>';
            prodottiEsauriti.forEach(gioco => {
                htmlEsauriti += `<li>❌ <strong>${gioco.nome}</strong></li>`;
            });
            htmlEsauriti += '</ul>';
            contenitoreEsauriti.innerHTML = htmlEsauriti;
        } else {
            contenitoreEsauriti.innerHTML = '<p style="color: #2b8a3e; font-weight: bold; margin:0;">🎉 Evviva! Tutto è disponibile!</p>';
        }
    }
});