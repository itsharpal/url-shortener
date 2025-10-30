import express from "express";
import { deleteUrl, getStats, redirectUrl, retrieveUrl, shortenUrl, updateUrl } from "../controllers/url.controller.js";

const router = express.Router();

router.route("/shorten").post(shortenUrl);
router.route("/shorten/:urlId").get(retrieveUrl);
router.route("/shorten/:urlId").put(updateUrl);
router.route('/shorten/:urlId').delete(deleteUrl);

router.route('/:urlId').get(redirectUrl);
router.route('/stats/:urlId').get(getStats);

export default router;