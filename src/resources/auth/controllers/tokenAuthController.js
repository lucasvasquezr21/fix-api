import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import Token from '../../models/token/tokenModel.js';

export const loginToken = async (req, res) => {
  try {
    const { user, password } = req.body;

    // Verificar si el usuario y la contraseña son correctos
    const token = await Token.findOne({ user });
    if (!token) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcryptjs.compare(password, token.password);
    if (!isPasswordValid) {
      return res.status(401).json({success: false,  message: 'Credenciales inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ tokenId: token._id }, environment.secretKey, { expiresIn: '60m' });

    // Enviar una respuesta al cliente
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: 'Ha ocurrido un error al iniciar sesión' });
  }
};