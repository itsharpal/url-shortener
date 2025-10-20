import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    newUrl: {
        type: String,
        required: true
    },
    accessCount: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export const Url = mongoose.model("Url", urlSchema);
