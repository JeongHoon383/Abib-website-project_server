import express from "express";
import { getProducts, getRecommend } from "../controller/MainController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/", getRecommend);

export default router;
