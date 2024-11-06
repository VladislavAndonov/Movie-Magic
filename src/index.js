import routes from "./routes.js";
import express from "express";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";
import mongooseInit from "./config/mongooseInit.js";

const app = express();

mongooseInit();
expressInit(app);
handlebarsInit(app);

app.use(routes);

app.listen(5000, () =>
    console.log("Server is listening on http://localhost:5000...")
);
