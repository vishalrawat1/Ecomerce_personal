import mongoose, { Schema, set } from "mongoose";

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        imageName: String,
        data: Buffer,
        contentType: String,
    },
    imageLink:{
        type:String,
    }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
