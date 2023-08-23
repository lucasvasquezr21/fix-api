// src/middlewares/authenticateToken.js
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import User from '../../users/userModel.js';
import Admin from '../../admins/adminModel.js';
import Vecino from '../../vecinos/vecinoModel.js';
import Reporte from '../../reportes/reporteModel.js';
import Alerta from '../../alertas/alertaModel.js';

const authenticateToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'No se ha proporcionado un token de acceso' });
    }

    const decodedToken = jwt.verify(accessToken, environment.secretKey);
    const user = await User.findById(decodedToken.userId);
    const admin = await Admin.findById(decodedToken.adminId);
    const vecino = await Vecino.findById(decodedToken.vecinoId);
    const reporte = await Reporte.findById(decodedToken.reporteId);
    const alerta = await Alerta.findById(decodedToken.alertaId);
    
    if (!user && !admin && !vecino && !reporte && !alerta) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }

    req.user = user;
    req.admin = admin;
    req.vecino = vecino;
    req.reporte = reporte;
    req.alerta = alerta;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al autenticar el token de acceso' });
  }
};

export default authenticateToken;
