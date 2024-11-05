import uniqid from 'uniqid'

import movieData from "../data/movieData.js";

const getAll = () => movieData.getAll();

const create = (movie) => {
    movie.id = uniqid();

    return movieData.create(movie);
};

const getOne = async (movieId) => {
    const movies = await movieData.getAll();

    const resultMovie = movies.find(movie => movie.id == movieId);

    return resultMovie
};

export default {
    getAll,
    create,
    getOne
};
