// src/routes/categoriaRoutes.js
import express from 'express';
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from '../controllers/categoriaController.js';

const router = express.Router();

// Rutas para obtener, crear, modificar y eliminar categorías
router.get('/', getCategoria);
router.post('/', createCategoria);
router.patch('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

export default router;