import Vecino from './vecinoModel.js';
import bcryptjs from 'bcryptjs';

export const getVecinos = async (req, res) => {
  try {
    const vecinos = await Vecino.find();
    res.status(200).json(vecinos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los vecinos' });
  }
};

export const createVecino = async (req, res) => {
  const { name, email, password , country, comuna, city,phone,address,data} = req.body;
  try {
    const vecino = await Vecino.create({
      name,
      email,
      password: await bcryptjs.hash(password, 10),
      country,
      comuna,
      city,
      phone,
      address,
      data,

    });
    res.status(201).json(vecino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al crear el vecino' });
  }
};

export const getVecinoById = async (req, res) => {
  const { id } = req.params;
  try {
    const vecino = await Vecino.findById(id);
    if (!vecino) {
      return res.status(404).json({ message: 'Vecino no encontrado' });
    }
    res.status(200).json(vecino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener el vecino' });
  }
};

export const updateVecino = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const vecino = await Vecino.findById(id);
    if (!vecino) {
      return res.status(404).json({ message: 'Vecino no encontrado' });
    }
    if (name) vecino.name = name;
    if (email) vecino.email = email;
    if (password) vecino.password = await bcryptjs.hash(password, 10);
    if (country) vecino.country = country;
    if (comuna) vecino.comuna = comuna;
    if (city) vecino.city = city;
    if (phone) vecino.phone = phone;
    if (address) vecino.address = address;
    if (data) vecino.data = data;
    
    const updatedVecino = await vecino.save();
    res.status(200).json(updatedVecino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar el vecino' });
  }
};

export const deleteVecino = async (req, res) => {
  const { id } = req.params;
  try {
    const vecino = await Vecino.findById(id);
    if (!vecino) {
      return res.status(404).json({ message: 'Vecino no encontrado' });
    }
    await vecino.remove();
    res.status(200).json({ message: 'Vecino eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al eliminar el vecino' });
  }
};
