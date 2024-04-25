import express from "express";
import login from "../Controllers/login.js";
import register from "../Controllers/register.js";
import additems from "../Controllers/additems.js";
const adminroutes = express.Router();
adminroutes.route('/login').post(login);
adminroutes.route('/register').post(register);
adminroutes.route('/additems').post(additems);

export default adminroutes;