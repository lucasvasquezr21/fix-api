// src/routes/maestroRoutes.js
import express from 'express';
import { getMaestros, createMaestro, updateMaestro, deleteMaestro} from '../controllers/maestroController.js';

const router = express.Router();

// Rutas para obtener y crear maestros
router.get('/', getMaestros);
router.post('/', createMaestro);
router.patch('/:id', updateMaestro);
router.delete('/:id', deleteMaestro);

export default router;