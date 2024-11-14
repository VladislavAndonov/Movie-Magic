import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const SECRET = "f30ra7aea4846c5d7ea735e358bwtc35";
const register = (email, password) => {
    // TODO: Check if email already exists

    return User.create({ email, password });
};

const login = async (email, password) => {
    // TODO: Validate if the user exists
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User does not exist!");
    }

    // TODO: Validate if the entered password match the hashed pass in DB
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Password does not match");
    }

    // TODO: Generate and return JWT token
    const payload = { _id: user._id, email };
    const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });
    
    return token;
};

export default {
    register,
    login,
};
