import express from 'express';
import multer from 'multer';
import * as controller from '../controller/ReviewController.js';

const router = express.Router();

const save = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/review/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '_' + file.originalname);
    },
  }),
});

router.post('/', save.single('rcover'), controller.saveReview);

export default router;
