import express from "express";
import { getProducts, insertQna } from "../controller/MainController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", insertQna);

export default router;