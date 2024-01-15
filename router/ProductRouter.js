import express from "express";
import * as controller from "../controller/ProductController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get("/list/:category", controller.getProduct);
router.get("/detail/:pid", controller.getProductDetail);

export default router;
