import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    accessCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export const Url = mongoose.model("Url", urlSchema);
