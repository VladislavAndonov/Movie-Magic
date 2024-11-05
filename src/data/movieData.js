import fs from "fs/promises";
import path from "path";

const dbPath = path.resolve("./src/db.json");

async function getDb() {
    const jsonResult = await fs.readFile(dbPath, { encoding: "UTF-8" });
    const data = JSON.parse(jsonResult);

    return data;
}

async function getAll() {
    const db = await getDb();
    return db.movies;
}

async function saevDb(data) {
   return fs.writeFile(dbPath, JSON.stringify(data, {}, 2));
}

async function create(movieData) {
    const db = await getDb();

    db.movies.push(movieData);

    return saevDb(db)
}

export default {
    getAll,
    create,
};
