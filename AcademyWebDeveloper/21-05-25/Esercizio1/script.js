
  
        let titolo = document.getElementById("titolo");

        let descrizione = document.querySelector(".descrizione");

        let bottoni = document.querySelectorAll("button");

        let divAnimali = document.getElementById("divAnimali");

        function creaAnimale(nome, testo, classe, immagine) {

            const card = document.createElement("div");


            // crea card con classe <div class="animale leone">
            card.classList.add("animale");
            card.classList.add(classe);

            card.innerHTML = 
                `<img src="${immagine}" alt="${nome}">
                <h3>${nome}</h3>
                <p>${testo}</p>
            `;

            divAnimali.appendChild(card);
        }

        document.getElementById("btnLeone").addEventListener("click", () => {

            creaAnimale(
                "Leone",
                "Il re della savana.",
                "leone",
                "https://safariravenna.it/wp-content/uploads/2024/03/Leone-1.jpg"
            );

            titolo.textContent = "Zoo dei Felini";

            descrizione.textContent =
                "Hai aggiunto un magnifico leone allo zoo!";
        });


        document.getElementById("btnElefante").addEventListener("click", () => {

            creaAnimale(
                "Elefante",
                "L'animale terrestre più grande.",
                "elefante",
                "https://upload.wikimedia.org/wikipedia/commons/d/dc/Elephant_near_ndutu.jpg"
            );

            titolo.textContent = "Zoo della Savana";

            descrizione.textContent =
                "Un grande elefante è arrivato nello zoo!";
        });



        document.getElementById("btnRimuovi").addEventListener("click", () => {

            const ultimoAnimale = divAnimali.lastElementChild;

            if (ultimoAnimale) {
                ultimoAnimale.remove();
            }
        });


        document.getElementById("btnTema").addEventListener("click", () => {

            document.body.classList.toggle("tema-scuro");
        });

        bottoni.forEach((bottone) => {
            bottone.style.fontWeight = "bold";
        });
