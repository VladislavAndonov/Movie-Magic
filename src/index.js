import routes from "./routes.js";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";

const app = express();

expressInit(app);
handlebarsInit(app);

app.use(routes);

app.listen(5000, () =>
    console.log("Server is listening on http://localhost:5000...")
);
