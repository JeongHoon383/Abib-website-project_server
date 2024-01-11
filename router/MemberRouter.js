import express from "express";
import * as MemberReq from "../controller/MemberController.js";

const router = express.Router();

router.post("/", MemberReq.getCertificationCode);

export default router;