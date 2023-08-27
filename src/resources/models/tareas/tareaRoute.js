// // src/routes/userRoutes.js
// import express from 'express';
// import { getReportes, createReporte, getReporteById, updateReporte, deleteReporte } from './reporteController.js'
// import authenticateToken from '../../auth/middlewares/authenticateToken.js';

// const router = express.Router();

// // Rutas para obtener y modificar los datos de los usuarios
// router.get('/', authenticateToken, getReportes);
// router.post('/', authenticateToken, createReporte);
// router.get('/:id', authenticateToken, getReporteById);
// router.patch('/:id', authenticateToken, updateReporte);
// router.delete('/:id', authenticateToken, deleteReporte);

// export default router;