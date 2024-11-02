import { Router } from "express";

import homeController from "./controllers/homeController.js";
import createController from "./controllers/createController.js";

const router = Router();

router.use(homeController);
router.use(createController);

export default router;
