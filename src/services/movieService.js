import uniqid from "uniqid";

import movieData from "../data/movieData.js";

const getAll = async (query = {}) => {
    let movies = await movieData.getAll();

    if (query.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(query.search.toLowerCase()));
    }

    if (query.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === query.genre.toLowerCase());
    }

    if (query.year) {
        movies = movies.filter(movie => movie.year === query.year);
    }

    return movies;
};
const create = (movie) => {
    movie.id = uniqid();
    movie.rating = Number(movie.rating);

    return movieData.create(movie);
};

const getOne = async (movieId) => {
    const movies = await movieData.getAll();

    const resultMovie = movies.find((movie) => movie.id == movieId);

    return resultMovie;
};

export default {
    getAll,
    create,
    getOne,
};
