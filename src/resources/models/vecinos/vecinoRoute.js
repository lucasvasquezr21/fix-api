// src/routes/userRoutes.js
import express from 'express';
import { getVecinos, createVecino, getVecinoById, updateVecino, deleteVecino } from './vecinoController.js'
import authenticateToken from '../../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/', authenticateToken, getVecinos);
router.post('/', authenticateToken, createVecino);
router.get('/:id', authenticateToken, getVecinoById);
router.patch('/:id', authenticateToken, updateVecino);
router.delete('/:id', authenticateToken, deleteVecino);

export default router;