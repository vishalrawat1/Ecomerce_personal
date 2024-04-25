import mongoose, { Schema, set } from "mongoose";

const credentialsSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isadmin:{
        type: Boolean,
        default:false
    }
});

const Credentials = mongoose.model("Credentials", credentialsSchema);
export default Credentials;
