import User from './userModel.js';
import bcryptjs from 'bcryptjs';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los usuarios' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener el usuario' });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, country, city, phone, rol, comuna, data } = req.body;
  try {
    const newUser = await User.create({
      name,
      email,
      password : await bcryptjs.hash(password, 10),
      country,
      city,
      phone,
      rol,
      comuna,
      data,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al crear el usuario' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, country, city, phone, rol, comuna, data } = req.body;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await bcryptjs.hash(password, 10);
    if (country) user.country = country;
    if (city) user.city = city;
    if (phone) user.phone = phone;
    if (rol) user.rol = rol;
    if (comuna) user.comuna = comuna;
    if (data) user.data = data;
    
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar el usuario' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
