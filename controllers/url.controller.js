import { Url } from "../models/url.model.js";
import { validateUrl } from "../utils/validateUrl.js"
import { nanoid } from "nanoid";

export const shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const base = process.env.BASE_URL;
    const urlId = nanoid(6);
    if (validateUrl(originalUrl)) {
        try {
            let url = await Url.findOne({ originalUrl });
            if (url) {
                return res.json(url)
            } else {
                const shortUrl = `${base}/${urlId}`;
                let url = new Url({
                    urlId,
                    originalUrl,
                    shortUrl,
                    accessCount: 0
                });

                await url.save();
                return res.status(201).json(url);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json("invalid url");
    }
}

export const retrieveUrl = async (req, res) => {
    
}