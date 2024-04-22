import express from "express";
import bcrypt from "bcrypt";
import Credentials from "../Models/Crediantials.js";


const login = async (req, res) => {
    const { name, email, password, phone , address } = req.body;
    if (!name || !email || !password || !phone || !address || email.trim() === "" || name.trim() === "" || password.trim() === "" || phone.trim()==="" || password.trim() === "") {
        return res.status(401).send({ message: "invalid input" });
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const admin = new Credentials({ name, email, password: hashPassword, phone , address });
        const savedAdmin = await admin.save();

        return res.status(201).json({
            message: "registered successfully",
            id: savedAdmin._id
        });
    } catch (error) {
        console.error("Error occurred in the registration:", error);
        return res.status(401).json({ message: "error occurred in the registration" });
    }
}

export default login;
