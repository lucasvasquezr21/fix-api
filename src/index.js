// src/index.js
import app from "./app.js";
import connectDB from "./db.js";
import dotenv from 'dotenv';

// Conectarse a la base de datos de MongoDB
connectDB();

dotenv.config();
// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("Servidor iniciado en el puerto 3000");});