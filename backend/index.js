import express, { Router } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import Routes from "./Routes/Adminroutes.js";
import Credentials from "./Models/Crediantials.js";
import Adminroutes from "./Routes/Adminroutes.js";
import cors from "cors"
import Item from "./Models/items.js";
import multer from "multer";
import { join } from "node:path";

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
const mongoURL = process.env.mongoURL;
console.log(PORT);

app.use(
  cors({
    origin: true,
    credentials:true
  })
)

app.use('/' , Adminroutes)

// multer 

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = "uploads";
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  // only using when specific type of file required
  // const fileFilterConfig = (req, file, cb) => {
  //   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //   }
  // };
  
  const upload = multer({
    storage: storageConfig,
    limits: {
      fileSize: 1024 * 1024 * 5, // 5 MB limit
    },
    //fileFilter: fileFilterConfig,
  });
  
  app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(413).send(`File not uploaded!, Please attach a jpeg file under 5 MB`);
    }
  
    try {
      const newImage = new Item({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: 'image/jpg' 
        }
      });
  
      newImage.save()
        .then(() => res.status(201).send('File uploaded successfully'))
        .catch((err) => {
          console.error(err);
          res.status(500).send("Failed to upload file");
        });
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while uploading file");
    }
  });
 

mongoose.connect(mongoURL).then(()=>{
console.log('app connected to database');
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
}).catch((error)=>{
console.log(error);
})



