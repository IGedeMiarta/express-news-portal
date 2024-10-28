import express from 'express';
import { addCategory, addNews, getNewsList, searchNews } from '../controllers/newsController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/categories', authMiddleware, addCategory);
router.post('/news', authMiddleware, addNews);
router.get('/news', getNewsList);
router.get('/news/search', searchNews);

export default router;
