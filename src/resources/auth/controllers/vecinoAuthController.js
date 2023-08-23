import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import Vecino from '../../vecinos/vecinoModel.js';

export const registerVecino = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existingVecino = await Vecino.findOne({ email });
    if (existingVecino) {
      return res.status(400).json({ success: false, message: 'Ya existe un vecino con el mismo correo electrónico' });
    }

    // Crear un nuevo usuario
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newVecino = new Vecino({ email, password: hashedPassword });
    await newVecino.save();

    // Generar un token de acceso
    const accessToken = jwt.sign({ vecinoId: newVecino._id }, environment.secretKey, { expiresIn: '5m' });

    // Enviar una respuesta al clienteVecino
    res.status(201).json({ success: true, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Ha ocurrido un error al iniciar sesión' });
  }
};

export const loginVecino = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const vecino = await Vecino.findOne({ email });
    if (!vecino) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcryptjs.compare(password, vecino.password);
    if (!isPasswordValid) {
      return res.status(401).json({success: false,  message: 'Credenciales inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ vecinoId: vecino._id }, environment.secretKey, { expiresIn: '30m' });

    // Enviar una respuesta al cliente
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: 'Ha ocurrido un error al iniciar sesión' });
  }
};