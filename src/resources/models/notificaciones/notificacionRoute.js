// src/routes/alertaRoute.js
import express from 'express';
import { getNotificaciones, getNotificacionById, updateNotificacion, deleteNotificacion} from './alertaController.js';
import authenticateToken from '../auth/middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y crear alerta
router.get('/', authenticateToken, getNotificaciones);
router.get('/:id', authenticateToken, getNotificacionById);
router.patch('/:id', authenticateToken, updateNotificacion);
router.delete('/:id', authenticateToken, deleteNotificacion);

export default router;