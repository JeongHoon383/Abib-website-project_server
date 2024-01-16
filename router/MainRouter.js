import express from "express";
import {
  getOrderList,
  getProducts,
  insertQna,
} from "../controller/MainController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", insertQna);

router.get("/orderlist/:id", getOrderList);

export default router;
