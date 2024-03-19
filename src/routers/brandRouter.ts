import { Router } from 'express';
import { createBrand, getBrands, addReadPermission, removeFullPermission, addFullPermission} from '../controllers/brandController';
import authMiddleware from '../middleware/authMiddleware';
import checkRoleAdmin from '../middleware/roleMiddleware';
const router = Router();

router.post('/',authMiddleware, createBrand);
router.get('/',authMiddleware, getBrands);
// router.put('/:id',authMiddleware, updateBrand);
// router.delete('/:id',authMiddleware, deleteBrand);
router.post('/:brandId/read-permission', checkRoleAdmin, addReadPermission);
router.post('/:brandId/full-permission', checkRoleAdmin, addFullPermission);
router.delete('/:brandId/full-permission',checkRoleAdmin, removeFullPermission);

export default router;
