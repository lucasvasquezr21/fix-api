//errorHandler.js
import logger from './logger.js';

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Ha ocurrido un error en el servidor';

  // Llama al logger con el mensaje convertido a cadena JSON
  logger(JSON.stringify({ statusCode, message, stack: err.stack }));

  res.status(statusCode).json({ message });
};
