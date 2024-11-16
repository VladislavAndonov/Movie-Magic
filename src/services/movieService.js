import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
    let movies = await Movie.find();

    // TODO: Refacture using db functionalities

    if (filter.search) {
        movies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(filter.search.toLowerCase())
        );
    }

    if (filter.genre) {
        movies = movies.filter(
            (movie) => movie.genre.toLowerCase() === filter.genre.toLowerCase()
        );
    }

    if (filter.year) {
        movies = movies.filter((movie) => movie.year === filter.year);
    }

    return movies;
};

const create = (movie, ownerId) => Movie.create({...movie, owner: ownerId});

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const attach = (movieId, castId) => {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};

export default {
    getAll,
    create,
    getOne,
    attach
};
