import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9\s]+$/, 'Title must contain only letters, numbers and spaces.']
    },
    genre: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9\s]+$/, 'Genre must contain only letters, numbers and spaces.']
    },
    director: {
        type: String,
        minLength: 5,
        validate: [/^[A-Za-z0-9\s]+$/, 'Director must contain only letters, numbers and spaces.'],
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Cannot add movies before 1900'],
        max: [2025, 'Cannot add movies after 2025']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must be at most 10']
    },
    description: {
        type: String,
        required: true,
        validate: [/^[A-Za-z0-9\s]+$/, 'Description must contain only letters, numbers and spaces.'],
        maxLength: [100, 'Description must be at most 100 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\/.+$/, 'Ivalid image URL!']
    },
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
