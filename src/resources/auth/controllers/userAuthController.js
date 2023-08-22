import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import User from '../../users/userModel.js';

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Ya existe un usuario con el mismo correo electrónico' });
    }

    // Crear un nuevo usuario
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: newUser._id }, environment.secretKey, { expiresIn: '5m' });

    // Enviar una respuesta al cliente
    res.status(201).json({ success: true, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Ha ocurrido un error al iniciar sesión' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({success: false,  message: 'Credenciales inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: user._id }, environment.secretKey, { expiresIn: '30m' });

    // Enviar una respuesta al cliente
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: 'Ha ocurrido un error al iniciar sesión' });
  }
};