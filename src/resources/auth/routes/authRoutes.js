import express from 'express';
import { registerUser, loginUser } from '../controllers/userAuthController.js';
import { registerAdmin, loginAdmin } from '../controllers/adminAuthController.js';
import { registerVecino, loginVecino } from '../controllers/vecinoAuthController.js';
import { loginToken } from '../controllers/tokenAuthController.js';

const router = express.Router();

// Rutas para registro e inicio de sesión de usuarios
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

// Rutas para registro e inicio de sesión de admins
router.post('/admin/register', registerAdmin);
router.post('/admin/login', loginAdmin);

// Rutas para registro e inicio de sesión de vecinos
router.post('/vecino/register', registerVecino);
router.post('/vecino/login', loginVecino);

//Ruta para obtener token de acceso
router.post('/token/login', loginToken);
export default router;