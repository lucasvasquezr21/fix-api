import Rol from './rolModel.js';

// Obtener todas los roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

// Obtener una categoría por id
export const getRolById = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findById(id);
    if (!rol) {
      res.status(404).json({ error: 'Rol no encontrado' });
      return;
    }
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol' });
  }
};

// Crear una rol
export const createRol = async (req, res) => {
  const { title } = req.body;
  try {
    const nuevoRol = await Rol.create({
       title,
       description,
       img,
       date,
       data
      });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el rol' });
  }
};

// Modificar una rol
export const updateRol = async (req, res) => {
  const { id } = req.params;
  const { title, description, img, date, data } = req.body;
  try {
    const rolActualizado = await Rol.findByIdAndUpdate(
      id,
      { title, description, img, date, data},
      { new: true }
    );
    if (!rolActualizado) {
      res.status(404).json({ error: 'Rol no encontrado' });
      return;
    }
    res.json(rolActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el rol' });
  }
};

// Eliminar una categoría
export const deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    const  rolEliminado = await Rol.findByIdAndDelete(id);
    if (!rolEliminado) {
      res.status(404).json({ error: 'Rol no encontrado' });
      return;
    }
    res.json({ message: 'Rol eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el rol' });
  }
};