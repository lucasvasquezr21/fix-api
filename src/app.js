// app.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import maestroRoutes from './routes/maestrosRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js'; // Agregar importación de las rutas de categorías

const app = express();

// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/maestros', maestroRoutes);
app.use('/categorias', categoriaRoutes);

export default app;