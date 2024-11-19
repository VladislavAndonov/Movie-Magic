import jwt from "../lib/jwt.js";
import { JWT_SECRET } from "../config/constants.js";

export const authMiddleware = async (req, res, next) => {
    // Check if there is a token in the request
    const token = req.cookies["auth"];

    if (!token) {
        return next();
    }

    try {
        // Validate token
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        // Add user data to request
        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
        };

        req.user = user;
        req.isAuthenticated = true;

        res.locals.userId = user._id;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;

        return next();
    } catch (err) {
        res.clearCookie("auth");

        res.redirect("/auth/login");
    }
};

export const isAuth = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect("/auth/login");
    }

    return next();
};
