import Item from "../Models/items.js";
import { google } from "googleapis";
import path from "path";
import fs from "fs";

const KEY_FILE_PATH = path.join("some-service-account.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const SCOPES_2 = ["https://www.googleapis.com/auth/drive.readonly"];

const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES
});

const auth_2= new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES_2
});

const additems = async (req, res) => {
    try {
        const { name, description, price, category, imageLink } = req.body;
        const image = req.file; 
        const drive = google.drive({ version: "v3", auth: auth });
        const driveResponse = await drive.files.create({
            media: {
                mimeType: image.mimetype,
                body: fs.createReadStream(image.path)
            },
            requestBody: {
                name: image.originalname,
                parents: ["15yn-KoSOt-NkYV8cW_dxRsXl0pfICqu6"] 
            },
            fields: "id,name"
        });
        
        // List photos from Google Drive
        const drive_2 = google.drive({ version: 'v3', auth: auth_2 });
        const driveResponse_2 = await drive_2.files.list({
            q: "mimeType='image/jpeg' or mimeType='image/png'", 
            pageSize: 10, // Number of files to fetch
            fields: 'files(id, name, thumbnailLink)', 
        });
        const photos = driveResponse_2.data.files;
        const specificPhoto = photos.find(photo => photo.name === image.originalname);
        
        const newItem = new Item({
            name: name,
            description: description,
            price: price,
            category: category,
            image: {
                imageName: image.originalname,
                data: image.buffer,
                contentType: image.mimetype,
            },
            imageLink : specificPhoto.thumbnailLink
        });
        // Save the new item to the database
        await newItem.save();
        
        // Return success response
        return res.json({ status: 1, message: "success", file_id: driveResponse.data.id, file_name: driveResponse.data.name });
    } catch (error) {
        console.error(error);
        return res.json({ status: -1, message: "failure", err: error.message });
    }
};

export default additems;
