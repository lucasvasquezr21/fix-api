// app.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import environment from './config/environment.js';
import authRoutes from './resources/auth/routes/authRoutes.js';
import userRoutes from './resources/users/routes/userRoutes.js';
import maestroRoutes from './resources/maestros/routes/maestroRoutes.js';
import categoriaRoutes from './resources/categorias/routes/categoriaRoutes.js';
import { connectDB } from './config/database.config.js';

const app = express();

// Conectarse a la base de datos de MongoDB
connectDB();

// Configurar middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar CORS
app.use(cors());

// Configurar middlewares para aceptar solicitudes JSON
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/maestros', maestroRoutes);
app.use('/categorias', categoriaRoutes);

app.listen(environment.PORT, () => {
  console.log(`API INICIADA EN PUERTO: ${environment.PORT}`);
});