import Cast from "../models/Cast.js";

const create = (cast) => Cast.create(cast);

const getAll = (filter) => Cast.find(filter);

export default {
    create,
    getAll
}