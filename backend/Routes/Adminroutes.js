import express from "express";
import login from "../Controllers/login.js";
import register from "../Controllers/register.js";
const adminroutes = express.Router();
adminroutes.route('/login').post(login);
adminroutes.route('/register').post(register);

export default adminroutes;