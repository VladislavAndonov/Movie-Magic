import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

export const authMiddleware = (req, res, next) => {
    // TODO: Check if there is a token in the request
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);

        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
        }

        res.user = user;
        res.locals.userId = user._id;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;

        return next();
        
    } catch (err) {
        res.clearCookie('auth');

        res.redirect('/auth/login');
    };

    // TODO: Validate token

    // TODO: Add user data to request
};

