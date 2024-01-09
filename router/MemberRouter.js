import express from 'express';
import * as MemberRep from '../controller/MemberController.js';

const router = express.Router();

router.post('/', MemberRep.getCertificationCode);

export default router;
