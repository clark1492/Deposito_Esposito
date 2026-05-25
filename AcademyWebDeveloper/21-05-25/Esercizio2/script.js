const form = document.getElementById("bookForm");
const bookContainer = document.getElementById("bookList");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

function createBookCard(title, author, year, genre, description) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${author}</p>
    `;

    bookContainer.appendChild(card);

}

form.addEventListener("submit", (event) => {

    // Blocca il refresh automatico della pagina
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;
    const description = document.getElementById("description").value;

    createBookCard(title, author, year, genre, description);
    
    // Resetta il form dopo l'invio
    form.reset();

})

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
});