import { getTrending, getTrendingMovie, getTrendingSeries, searchPerson } from "./api/trendingGetters.js";
// export { BASE_URL, OPTIONS } from ".api/config.js"
export { fixTitle, titolo } from "./utils/dom.js"
//richiamo della funzione
/** getTrending().then(data => {

    data.results.forEach(all => {
        (console.log('Id: ' + all.id));
        (console.log('Poster: ' + all.poster_path));
        (console.log('Title: ' + all.title));
        (console.log('Vote average: ' + all.vote_average));
        (console.log('Media type: ' + all.media_type));
        (console.log('Release date: ' + all.release_date));
    });
});; */
    getTrendingMovie().then(data => {

    data.results.forEach(movie => {
     //   (console.log('Id: ' + movie.id));
     //   (console.log('Poster: ' + movie.poster_path));
        (console.log('Title: ' + movie.title));
    //    (console.log('Vote average: ' + movie.vote_average));
     //   (console.log('Media type: ' + movie.media_type));
     //   (console.log('Release date: ' + movie.release_date));
    });
});
/** getTrendingSeries().then(data => {

    data.results.forEach(tv => {
        (console.log('Id: ' + tv.id));
        (console.log('Poster: ' + tv.poster_path));
        (console.log('Title: ' + tv.title));
        (console.log('Vote average: ' + tv.vote_average));
        (console.log('Media type: ' + tv.media_type));
        (console.log('Release date: ' + tv.release_date));
    });
}); */
searchPerson('Ryan Reynolds').then(data => {
    data.results.forEach(pearson =>{
        (console.log('Name: ' + pearson.name));
    }) ;
}); 


