import express from "express";
import * as controller from "../controller/OrderController.js";

const router = express.Router();

router.post("/", controller.order);
router.get("/getOrdererInfo/:memberId", controller.getOrdererInfo);

export default router;
