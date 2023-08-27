// src/routes/adminRoutes.js
import express from 'express';
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from './adminController.js';
import authenticateToken from '../../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y crear admin
router.get('/', authenticateToken, getAdmins);
router.post('/', authenticateToken, createAdmin);
router.get('/:id', authenticateToken, getAdminById);
router.patch('/:id', authenticateToken, updateAdmin);
router.delete('/:id', authenticateToken, deleteAdmin);

export default router;