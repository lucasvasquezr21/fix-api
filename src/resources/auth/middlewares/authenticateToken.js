// src/middlewares/authenticateToken.js
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import User from '../../models/users/userModel.js';
import Admin from '../../models/admins/adminModel.js';
import Vecino from '../../models/vecinos/vecinoModel.js';
import Reporte from '../../models/reportes/reporteModel.js';
import Alerta from '../../models/alertas/alertaModel.js';
import Notificacion from '../../models/notificaciones/notificacionModel.js';
import Comuna from '../../models/comunas/comunaModel.js';
// import Tarea from '../../models/tareas/tareaModel.js';
import Rol from '../../models/roles/rolModel.js';

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
    const comuna = await Comuna.findById(decodedToken.comunaId);
    const alerta = await Alerta.findById(decodedToken.alertaId);
    const notificacion = await Notificacion.findById(decodedToken.notificacionId);
    // const tarea = await Tarea.findById(decodedToken.tareaId);
    const rol = await Rol.findById(decodedToken.rolId);
    
    if (!user && !admin && !vecino && !reporte && !alerta && !notificacion && !comuna && !tarea && !rol) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }
    req.user = user;
    req.admin = admin;
    req.vecino = vecino;
    req.reporte = reporte;
    req.comuna = comuna;
    req.alerta = alerta;
    req.notificacion = notificacion;
    // req.tarea = tarea;
    req.rol = rol;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al autenticar el token de acceso' });
  }
};

export default authenticateToken;
