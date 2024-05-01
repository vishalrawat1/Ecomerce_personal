import { google } from "googleapis";
import path from "path";
import fs from "fs/promises"; =

const KEY_FILE_PATH = path.join("some-service-account.json");

const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES,
});

export const getFileDetails = async (req, res) => {
    try {
        const {name, description, price, category, file } = req;

        const { data } = await google.drive({ version: "v3", auth }).files.create({
            media: {
                mimeType: file.mimeType,
                body: fs.createReadStream(file.path),
            },
            requestBody: {
                name: file.originalname,
                parents: ["15yn-KoSOt-NkYV8cW_dxRsXl0pfICqu6"], // folder id in which file should be uploaded
            },
            fields: "id,name",
        });

        console.log(`File uploaded successfully -> ${JSON.stringify(data)}`);

        res.json({ status: 1, message: "success", file_id: data.id, file_name: data.name });
    } catch (error) {
        console.log(error);
        res.json({ status: -1, message: "failure", err: error.message });
    }
};


const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category || name.trim() === "" || description.trim() === "" || price.trim() === "" || category.trim() === "") {
        return res.status(400).send("Some fields are missing or empty");
    }

    try {
        let newItemData = {
            name: name,
            description: description,
            price: price,
            category: category,
        };

        if (req.file) {
            newItemData.image = {
                imageName:req.file.filename,
                data: req.file.filename,
                contentType: "image/jpg",
            };
        }

        const newItem = new Item(newItemData);

        await newItem.save();
        res.status(201).json({message:'item added succesfully' , data:newItemData});
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while adding the item");
    }