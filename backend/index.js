import express, { Router } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import Routes from "./Routes/Adminroutes.js";
import Adminroutes from "./Routes/Adminroutes.js";
import cors from "cors"


const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
const mongoURL = process.env.mongoURL;
console.log(PORT);

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
)

app.use('/' , Adminroutes);



mongoose.connect(mongoURL).then(()=>{
console.log('app connected to database');
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
}).catch((error)=>{
console.log(error);
})



