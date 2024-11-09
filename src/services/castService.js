import Cast from "../models/Cast.js";

const create = (cast) => Cast.create(cast);

const getAll = () => Cast.find();

export default {
    create,
    getAll
}