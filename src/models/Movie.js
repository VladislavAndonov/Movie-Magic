import { Schema } from "mongoose";

const movieSchema = new Schema({
    title: String,
    genre: String,
    director: String,
    year: Number,
    rating: Number,
    description: String,
    imageUrl: String
})

