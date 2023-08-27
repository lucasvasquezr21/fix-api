// src/routes/userRoutes.js
import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './userController.js'
import authenticateToken from '../../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/', authenticateToken, getUsers);
router.post('/', authenticateToken, createUser);
router.get('/:id', authenticateToken, getUserById);
router.patch('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;