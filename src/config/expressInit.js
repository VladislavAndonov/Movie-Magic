import express from "express";

export default function expressInit(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static("public"));
}
