import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser,register,login,createAdminRole } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/register', register);
router.post('/login', login);
router.post('/roles/admin', createAdminRole);

export default router;
