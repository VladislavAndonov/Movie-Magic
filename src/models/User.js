import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    email: { 
        type: String, 
        unique: true,
        required: true,
        minLength: [10, "Your email is too short!"],
        validate: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[A-Za-z0-9\s]+$/, 'Invalid email format.']	
    },
    password: {
        type: String,
        minLength: [6, "Your password is too short!"],
        required: true,
        validate: [/^[A-Za-z0-9\s]+$/, 'Password must contain only letters and numbers.']
    },
});

userSchema.virtual('rePassword').set(function (value) {
    if (value !== this.password) {
        throw new Error("Passwords don't match!");
    };
});

userSchema.pre("save", async function () {
    // Hash password before save
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = model("User", userSchema);

export default User;
