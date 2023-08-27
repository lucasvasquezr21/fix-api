// src/routes/categoriaRoutes.js
import express from 'express';
import { getComunas, createComuna, getComunaById, updateComuna, deleteComuna } from './comunaController.js';

const router = express.Router();

// Rutas para obtener, crear, modificar y eliminar comunas
router.get('/', getComunas);
router.post('/', createComuna);
router.get('/:id', getComunaById);
router.patch('/:id', updateComuna);
router.delete('/:id', deleteComuna);

export default router;