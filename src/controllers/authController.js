import { Router } from "express";
import authService from "../services/authService.js";

const router = Router();

router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.post("/register", async (req, res) => {
    const { email, password, rePassword } = req.body;

    await authService.register(email, password);

    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

export default router;
