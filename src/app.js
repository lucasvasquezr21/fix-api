// app.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import environment from './config/environment.js';
import authRoutes from './resources/auth/routes/authRoutes.js';
import userRoutes from './resources/users/userRoute.js';
import adminRoutes from './resources/admin/adminRoute.js';
import categoriaRoutes from './resources/categorias/categoriaRoute.js';
// import logger from './resources/auth/helpers/logger.js';
import { errorHandler } from './resources/auth/helpers/errorHandler.js';
import { connectDB } from './config/database.config.js';

const app = express();

// Conectarse a la base de datos de MongoDB
connectDB();

// Configurar middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// app.use(logger);

// Configurar rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

// Manejo de errores
app.use(errorHandler); // Middleware de manejo de errores

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/categorias', categoriaRoutes);

app.listen(environment.PORT, () => {
  console.log(`API INICIADA EN PUERTO: ${environment.PORT}`);
});