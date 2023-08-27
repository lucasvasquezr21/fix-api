// src/routes/rolRoute.js
import express from 'express';
import { getRoles, createRol, getRolById, updateRol, deleteRol } from './rolController.js';

const router = express.Router();

// Rutas para obtener, crear, modificar y eliminar roles
router.get('/', getRoles);
router.post('/', createRol);
router.get('/:id', getRolById);
router.patch('/:id', updateRol);
router.delete('/:id', deleteRol);

export default router;