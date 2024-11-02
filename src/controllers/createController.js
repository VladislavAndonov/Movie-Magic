import { Router } from "express";

const router = Router();

router.get("/create", (req, res) => {
    res.render("create/create");
});

export default router;
