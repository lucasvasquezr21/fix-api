// src/routes/userRoutes.js
import express from 'express';
import { getVecinos, createVecinos, getVecinoById, updateVecino, deleteVecino } from './vecinoController.js'
import authenticateToken from '../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/', authenticateToken, getVecinos);
router.post('/', authenticateToken, createVecinos);
router.get('/:id', authenticateToken, getVecinoById);
router.patch('/:id', authenticateToken, updateVecino);
router.delete('/:id', authenticateToken, deleteVecino);

export default router;