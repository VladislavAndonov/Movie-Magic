import { Router } from "express";
import authService from "../services/authService.js"

const router = Router();

router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.post("/register", async (req, res) => {
    const { email, password, rePassword } = req.body;


    console.log(email, password, rePassword);
    
    await authService.register(email, password);

    res.redirect("/");
});

export default router;
