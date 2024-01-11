import express from "express";
import * as controller from "../controller/CartController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get("/cart/:pid", controller.getCartProduct);

export default router;
