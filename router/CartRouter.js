import express from "express";
import * as controller from "../controller/CartController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post("/cartAdd", controller.cartAdd);

export default router;
