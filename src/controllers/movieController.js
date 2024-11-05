import { Router } from "express";

const router = Router();

// URL: /movies/create
router.get("/create", (req, res) => {
    res.render("movies/create");
});

export default router;
