import {Router} from 'express';

import homeController from './controllers/homeController.js'

const router = Router();

router.use(homeController);

export default router;