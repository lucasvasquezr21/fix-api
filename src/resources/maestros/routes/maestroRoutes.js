// src/routes/maestroRoutes.js
import express from 'express';
import { getMaestros, getMaestroById, updateMaestro, deleteMaestro} from '../controllers/maestroController.js';
import authenticateToken from '../../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y crear maestros
router.get('/', authenticateToken, getMaestros);
router.get('/:id', authenticateToken, getMaestroById);
router.patch('/:id', authenticateToken, updateMaestro);
router.delete('/:id', authenticateToken, deleteMaestro);

export default router;