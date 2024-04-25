import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
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
        data: Buffer,
        contentType:String,
        require : true
    },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
