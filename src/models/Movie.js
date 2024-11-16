import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2025
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    description: {
        type: String,
        required: true,
        maxLength: 300
    },
    imageUrl: String,
    casts: [
        {
            type: Types.ObjectId,
            ref: 'Cast'
        },
    ],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }

});

const Movie = model("Movie", movieSchema);

export default Movie;
