const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

let giochi = [
    { id: 1, nome: "The Legend of Zelda: Breath of the Wild", piattaforma: "Nintendo Switch" },
    { id: 2, nome: "God of War", piattaforma: "PlayStation 4" },
    { id: 3, nome: "Red Dead Redemption 2", piattaforma: "Multiplatform" },
    { id: 4, nome: "The Witcher 3: Wild Hunt", piattaforma: "Multiplatform" },
    { id: 5, nome: "Minecraft", piattaforma: "Multiplatform" }
];

// Il metodo listen avvia il server e blocca la porta specificata
app.listen(PORT, () => {
    console.log("Processo server attivo sulla porta di rete:", PORT);
});


app.get('/api/giochi', (req, res) => {
    res.status(200).json(giochi);
});

app.get('/api/giochi/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const gioco = giochi.find(g => g.id === id);
    if (!gioco) {
        res.status(404).json({ error: "Risorsa non individuata nel sistema" });
    } else {
        res.status(200).json(gioco);
    }
}); 