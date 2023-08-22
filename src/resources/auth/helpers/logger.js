//logger.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Módulo necesario para manejar URLs de archivos

// Obtén el directorio actual del módulo
const currentModuleDir = path.dirname(fileURLToPath(import.meta.url));

const logsDir = path.join(currentModuleDir, '../logs'); // Directorio de registros

// Crea el directorio de registros si no existe
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logFilePath = path.join(logsDir, 'app.log'); // Ruta del archivo de registros

const logger = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de registros:', err);
    }
  });
};

export default logger;
