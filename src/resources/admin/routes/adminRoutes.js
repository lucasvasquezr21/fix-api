// src/routes/adminRoutes.js
import express from 'express';
import { getAdmin, getAdminById, updateAdmin, deleteAdmin} from '../controllers/adminController.js';
import authenticateToken from '../../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y crear admin
router.get('/', authenticateToken, getAdmin);
router.get('/:id', authenticateToken, getAdminById);
router.patch('/:id', authenticateToken, updateAdmin);
router.delete('/:id', authenticateToken, deleteAdmin);

export default router;