/**
 * createTrendingMoviesList()
 * 
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo, che sarà un tag li 
 * contenete il titolo del movie  
 * @param Array dei film 
 * @returns
 */

// una funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film 
export const createTrendingMoviesList = (movies) => {
    // recupero il nodo ul con id "trending-movies-list"
    const list = document.getElementById("trending-movies-list");

    // ciclo su ogni elemento dell'array che viene preso in ingresso come parametro 
    movies.results.forEach((element) => {

        // creiamo su ogni elemento dell'array che viene preso in ingresso come parametro
        const listTitle = document.createElement("ul");

        // appendiamo alla pagina html il nuovo tag creato, sul tag ul 
        list.appendChild(listTitle);

        const cardContainer = document.getElementById("movie-card");

        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.scr = element.poster_path;
        image.alt = "poster";

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerText = element.overview;

        textContainer.appendChild(title);

        textContainer.appendChild(description);

        card.appendChild(textContainer);

        card.appendChild(image);
        card.classList.add("movie-card")

        cardContainer.appendChild(card);
    });

}
