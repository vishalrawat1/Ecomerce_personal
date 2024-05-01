import Item from "../Models/items.js";
import { google } from "googleapis";
import path from "path";


const getItems = async (req, res) => {
  try {
    // Fetch items from MongoDB
    const data = await Item.find({});
    console.log(data);
    return res.status(200).json({ count: data.length, data: data });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send(error.message);
  }
}

export default getItems;
