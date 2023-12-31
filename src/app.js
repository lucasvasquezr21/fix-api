// app.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import environment from './config/environment.js';
import authRoutes from './resources/auth/routes/authRoutes.js';
import userRoutes from './resources/models/users/userRoute.js';
import adminRoutes from './resources/models/admins/adminRoute.js';
import categoriaRoutes from './resources/models/categorias/categoriaRoute.js';
import vecinosRoutes from './resources/models/vecinos/vecinoRoute.js';
import reportesRoutes from './resources/models/reportes/reporteRoute.js';
import { errorHandler } from './resources/auth/helpers/errorHandler.js';
import { connectDB } from './config/database.config.js';
import alertasRoutes from './resources/models/alertas/alertaRoute.js';

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

// Rutas de la API
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/vecinos', vecinosRoutes);
app.use('/reportes', reportesRoutes);
app.use('/alertas', alertasRoutes);

app.listen(environment.PORT, () => {
  console.log(`API INICIADA EN PUERTO: ${environment.PORT}`);
});