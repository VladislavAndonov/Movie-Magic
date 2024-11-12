import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/castController.js"
import authController from "./controllers/authController.js"

const router = Router();

router.use(homeController);
router.use('/movies', movieController);
router.use('/cast', castController);
router.use('/auth', authController);

router.all('*', (req, res) => {
    res.render('404')
})

export default router;
