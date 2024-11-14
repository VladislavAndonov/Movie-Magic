import User from "../models/User.js";
import bcrypt from "bcrypt";

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

    // TODO: Verify if the entered password match the hashed pass in DB
    // TODO: Generate and return JWT token
};

export default {
    register,
    login,
};
