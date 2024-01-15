import express from 'express';
import * as controller from '../controller/MemberController.js';

const router = express.Router();

router.get('/isIdAvailable/:idValue', controller.getIsIdAvailable);
router.post('/certification', controller.getCertificationCode);
router.post('/insertMember', controller.insertMember);
router.post('/login', controller.login);

export default router;