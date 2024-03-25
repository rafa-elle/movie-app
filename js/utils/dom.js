// funzione che al caricamento dell pagina verifichi che il titolo sia corretto, in caso lo corregge
export const fixTitle = () => {
    
    // tag a che contiene il titolo
    const title = document.getElementById("header");

    // stringa che c'è scritto dentro al tag
    const titleContent = title.innerHTML;

    if (titleContent === "Movie App") return;
    else {
        title.innerHTML = "Movie App";
    }
};

// una funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film 
