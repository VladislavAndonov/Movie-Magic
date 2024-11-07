import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
    res.render('cast/create');
});

export default router;