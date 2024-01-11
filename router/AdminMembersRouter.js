import express from "express";
import * as AdminMembersController from "../controller/AdminMembersController.js";

const router = express.Router();

router.post("/create", AdminMembersController.getList);

export default router;
