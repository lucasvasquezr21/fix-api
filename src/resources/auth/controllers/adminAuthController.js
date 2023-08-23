import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import Admin from '../../admins/adminModel.js';

export const registerAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const {email, password } = req.body;

    // Verificar si ya existe un admin con el mismo correo electrónico
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Ya existe un admin con el mismo correo electrónico' });
    }

    // Crear un nuevo Admin
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAdmin = new Admin({email, password: hashedPassword });
    await newAdmin.save();

    // Generar un token de acceso
    const accessToken = jwt.sign({ madminId: newAdmin._id }, environment.secretKey, { expiresIn: '5m' });

    // Enviar una respuesta al cliente
    res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al registrar el admin' });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const {email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcryptjs.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ adminId: admin._id }, environment.secretKey, { expiresIn: '30m' });

    // Enviar una respuesta al cliente
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al iniciar sesión' });
  }
};