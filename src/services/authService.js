import bcrypt from "bcrypt";
import jwt from "../lib/jwt.js";

import { JWT_SECRET } from "../config/constants.js";

import User from "../models/User.js";

const register = async (email, password, rePassword) => {
    // Check if email already exists

    const userCount = await User.countDocuments({ email });

    if (userCount > 0) {
        throw new Error("Email already exists!");
    };

    return User.create({ email, password, rePassword });
};

const login = async (email, password) => {
    // Validate if the user exists
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User does not exist!");
    }

    // Validate if the entered password match the hashed pass in DB
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Password does not match");
    }

    // Generate and return JWT token
    const payload = { _id: user._id, email };
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
    
    return token;
};

export default {
    register,
    login,
};
