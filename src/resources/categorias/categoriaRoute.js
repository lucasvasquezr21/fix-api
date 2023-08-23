// src/routes/categoriaRoutes.js
import express from 'express';
import { getCategorias, createCategoria, getCategoriaById, updateCategoria, deleteCategoria } from './categoriaController.js';

const router = express.Router();

// Rutas para obtener, crear, modificar y eliminar categorías
router.get('/', getCategorias);
router.post('/', createCategoria);
router.get('/:id', getCategoriaById);
router.patch('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

export default router;