import express from "express";
import { retrieveUrl, shortenUrl, updateUrl } from "../controllers/url.controller.js";

const router = express.Router();

router.route("/").post(shortenUrl);
router.route("/:urlId").get(retrieveUrl);
router.route("/:urlId").put(updateUrl);

export default router;