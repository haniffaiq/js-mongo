import { Router } from 'express';
import {createProduct,deleteProduct,updateProduct, getProduct, getProductbyId} from '../controllers/productController';
import authMiddleware from '../middleware/authMiddleware';
const router = Router();

router.post('/',authMiddleware, createProduct);
router.get('/:productId',authMiddleware, getProductbyId);
router.get('/brand/:brandId',authMiddleware, getProduct);
export default router;
