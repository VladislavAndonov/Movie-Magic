import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: String,
    genre: String,
    director: String,
    year: Number,
    rating: Number,
    description: String,
    imageUrl: String
});

const Movie = model('Movie', movieSchema);

export default Movie;
