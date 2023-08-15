// app.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import environment from './config/environment.js';
import authRoutes from './resources/auth/routes/authRoutes.js';
import userRoutes from './resources/users/routes/userRoutes.js';
import adminRoutes from './resources/admin/routes/adminRoutes.js';
import categoriaRoutes from './resources/categorias/routes/categoriaRoutes.js';
import { connectDB } from './config/database.config.js';
import { default as AdminBro } from 'admin-bro';

const app = express();

// Conectarse a la base de datos de MongoDB
connectDB();

// AdminBro
import { default as expressAdminBro } from '@admin-bro/express';
import { default as mongooseAdminBro } from '@admin-bro/mongoose';

// Modelos
import User from './resources/users/models/userModel.js';
import Admin from './resources/admin/models/adminModel.js'

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = new AdminBro({
  resources: [User, Admin]
});

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// Configurar middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Configurar rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/categorias', categoriaRoutes);

app.listen(environment.PORT, () => {
  console.log(`API INICIADA EN PUERTO: ${environment.PORT}`);
});
