import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import environment from '../../../config/environment.js';
import Maestro from '../../maestros/models/maestroModel.js';

export const registerMaestro = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    // Verificar si ya existe un maestro con el mismo correo electrónico
    const existingMaestro = await Maestro.findOne({ email });
    if (existingMaestro) {
      return res.status(400).json({ message: 'Ya existe un maestro con el mismo correo electrónico' });
    }

    // Crear un nuevo maestro
    const hashedPassword = await bcrypt.hash(password, 10);
    const newMaestro = new Maestro({ name, email, password: hashedPassword });
    await newMaestro.save();

    // Generar un token de acceso
    const accessToken = jwt.sign({ maestroId: newMaestro._id }, environment.secretKey);

    // Enviar una respuesta al cliente
    res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al registrar el maestro' });
  }
};

export const loginMaestro = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const maestro = await Maestro.findOne({ email });
    if (!maestro) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, maestro.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ maestroId: maestro._id }, environment.secretKey);

    // Enviar una respuesta al cliente
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al iniciar sesión' });
  }
};