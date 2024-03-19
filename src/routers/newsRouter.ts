import { Router } from 'express';
import {createNews,updateNewsById,deleteNewsById,getAllNews,getNewsById} from '../controllers/newsController'
import authMiddleware from '../middleware/authMiddleware';


const router = Router();

router.post('/',authMiddleware, createNews);
router.get('/',authMiddleware, getAllNews);
router.get('/:lang/:id',authMiddleware, getNewsById);
router.put('/:lang/:id',authMiddleware, updateNewsById);
router.delete('/:lang/:id',authMiddleware, deleteNewsById);

export default router;