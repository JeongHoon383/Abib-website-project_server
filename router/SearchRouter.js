import express from 'express';
import * as controller from '../controller/SearchController.js';

const router = express.Router();

router.get('/:query', controller.getSearchList);

export default router;
