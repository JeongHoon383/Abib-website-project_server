import express from 'express';
import * as SearchController from '../controller/SearchController.js';

const router = express.Router();

router.get('/', SearchController.getList);

export default router;
