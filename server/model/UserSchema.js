const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const User = new mongoose.model("data", UserSchema);

module.exports= User;