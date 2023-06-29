import express from 'express';
import { registerUser, loginUser } from '../controllers/userAuthController.js';
import { registerMaestro, loginMaestro } from '../controllers/maestroAuthController.js';

const router = express.Router();

// Rutas para registro e inicio de sesión de usuarios
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

// Rutas para registro e inicio de sesión de maestros
router.post('/maestro/register', registerMaestro);
router.post('/maestro/login', loginMaestro);

export default router;