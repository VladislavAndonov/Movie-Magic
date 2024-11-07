import Cast from "../models/Cast.js";

const create = (cast) => Cast.create(cast);

export default {
    create
}