import express from "express";
import { retrieveUrl, shortenUrl } from "../controllers/url.controller.js";

const router = express.Router();

router.route("/").post(shortenUrl);
router.route("/:urlId").get(retrieveUrl);

export default router;