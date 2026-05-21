const form = document.getElementById("bookForm");

form.addEventListener("submit", function(event) {
    
    // Blocca il refresh automatico della pagina
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;
    const description = document.getElementById("description").value;



}

function createBookCard(title, author, year, genre, description) {

    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `