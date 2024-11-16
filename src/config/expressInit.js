import express from "express";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export default function expressInit(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static("public"));
    app.use(cookieParser());
    app.use(authMiddleware);
}
