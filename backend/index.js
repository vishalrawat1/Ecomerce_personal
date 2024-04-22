import express, { Router } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import Routes from "./Routes/Adminroutes.js";
const app = express();
dotenv.config();
import Credentials from "./Models/Crediantials.js";
import Adminroutes from "./Routes/Adminroutes.js";
app.use(express.json());

const PORT = process.env.PORT;
const mongoURL = process.env.mongoURL;
console.log(PORT);

app.use('/' , Adminroutes)

// app.post("/", (req, res) => {
//     const { name, email, password, address } = req.body;
//     if (name === "" || email === "" || password === "" || address === "") {
//         return res.status(400).send("Invalid or empty input");
//     }
//     return res.status(201).send("Registered successfully");
// });



mongoose.connect(mongoURL).then(()=>{
console.log('app connected to database');
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
}).catch((error)=>{
console.log(error);
})



