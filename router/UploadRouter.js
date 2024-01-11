import express from "express";
import * as controller from "../controller/UploadController.js";

const router = express.Router();

router.post("/admin", controller.upload);
router.post("/review", controller.upload2);

export default router;
