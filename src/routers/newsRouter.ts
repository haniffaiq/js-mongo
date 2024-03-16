import { Router } from 'express';
import {createNews,updateNewsById,deleteNewsById,getAllNews,getNewsById} from '../controllers/newsController'


const router = Router();

router.post('/', createNews);
router.get('/', getAllNews);
router.get('/:lang/:id', getNewsById);
router.put('/:lang/:id', updateNewsById);
router.delete('/:lang/:id', deleteNewsById);

export default router;