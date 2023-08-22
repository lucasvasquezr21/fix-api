// src/routes/alertaRoute.js
import express from 'express';
import { getAlertas, getAlertaById, updateAlerta, deleteAlerta} from './alertaController.js';
import authenticateToken from '../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y crear alerta
router.get('/', authenticateToken, getAlertas);
router.get('/:id', authenticateToken, getAlertaById);
router.patch('/:id', authenticateToken, updateAlerta);
router.delete('/:id', authenticateToken, deleteAlerta);

export default router;