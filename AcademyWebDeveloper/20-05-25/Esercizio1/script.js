let titolo = document.getElementById("titolo");
let input = document.getElementById("input");
let paragrafo = document.getElementById("paragrafo");
let bottone = document.getElementById("bottone");
let cancella = document.getElementById("cancella");
let lista = document.getElementById("lista");


bottone.addEventListener("click", function () {
    
    let testo = input.value;
    paragrafo.innerHTML = "Hai aggiunto " + testo + " alla lista";
    if (testo === null || testo.trim() === "") {
        paragrafo.innerHTML = "Inserisci una parola";
    }
    else {
        if (!checkDuplicate(testo)) {
            let elemento = document.createElement("li");
            elemento.innerHTML = testo.trim();
            lista.appendChild(elemento);
        }
        else
        {
           paragrafo.innerHTML = "Non puoi aggiungere duplicati alla lista"; 
        }
    }

    input.value = "";
});

cancella.addEventListener("click", function () {

    lista.innerHTML = "";
    paragrafo.innerHTML = "Hai cancellato tutta la lista";
});

titolo.addEventListener("click", function () {
    if (titolo.style.color === "blue")
        titolo.style.color = "black";
    else
      titolo.style.color = "blue";  
});

paragrafo.addEventListener("mouseover", function () {
    
      paragrafo.style.color = "blue";  
});

paragrafo.addEventListener("mouseleave", function () {
    
      paragrafo.style.color = "black";  
});


function checkDuplicate(duplicato) {
    let listItems = lista.querySelectorAll("li");
    for (let item of listItems) {
        if (item.textContent === duplicato)
            return true;
    }
    return false;
}