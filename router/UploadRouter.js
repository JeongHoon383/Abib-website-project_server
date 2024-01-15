import express from "express";
import * as controller from "../controller/UploadController.js";

const router = express.Router();

router.post("/admin", controller.upload);

export default router;
