// const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

import { BASE_URL, OPTIONS } from "./config.js";

export const getTrending = async () => {

    const response = await fetch(BASE_URL + 'trending/all/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
};


/** getTrending
 * 
 * @param BASE_URL 
 * 
 * @returns tutta la tendenza 
 */

export const getTrendingMovie = async () => {

    const response = await fetch(BASE_URL + 'trending/movie/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
};

/** getTrendingMovie
 * 
 * @param BASE_URL 
 * 
 * @returns film di tendenza
 */

export const getTrendingSeries = async () => {

    const response = await fetch(BASE_URL + 'trending/tv/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
};

/** getTrendingSeries
 * 
 * @param BASE_URL 
 * 
 * @returns Serie TV di tendenza
 */

export const searchPerson = async (surnamePerson) => {
    const response = await fetch(BASE_URL + `search/person?query=${surnamePerson}&include_adult=false&language=en-US&page=1'`, OPTIONS);

    const data = await response.json();

    return data;
};

