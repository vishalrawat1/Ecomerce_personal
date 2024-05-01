import express, { Router } from "express";
import login from "../Controllers/login.js";
import register from "../Controllers/register.js";
import additems from "../Controllers/additems.js";
import multer from "multer";
import getitems from "../Controllers/getitems.js";
const adminroutes = express.Router();

adminroutes.route('/login').post(login);
adminroutes.route('/register').post(register);
adminroutes.route('/getitems').get(getitems);
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "uploads";
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storageConfig,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
});
adminroutes.post('/additems', upload.single("image"), additems);
export default adminroutes;
