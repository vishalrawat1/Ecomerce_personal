import express from "express";
import Credentials from "../Models/Crediantials.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password || email.trim() === "" || password.trim() === "") {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    try {
        const existingUser = await Credentials.findOne({ email: email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found. Please register." });
        }

        const isPasswordValid = bcrypt.compareSync(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

    return res.status(200).json({ message: "Login successful", user: existingUser });

    } catch (error) {
        console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
    }
};

export default login;
