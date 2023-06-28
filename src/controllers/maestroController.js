// src/controllers/maestroController.js
import Maestro from '../models/maestroModel.js';

// Obtener todos los maestros
export const getMaestros = async (req, res) => {
  try {
    const maestros = await Maestro.find().populate('categorias');
    res.json(maestros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los maestros' });
  }
};

// Crear un maestro
export const createMaestro = async (req, res) => {
  const { nombre, categorias, calificacion, trabajosRealizados } = req.body;
  try {
    const maestro = new Maestro({
      nombre,
      correo,
      telefono,
      categorias,
      calificacion,
      trabajosRealizados: trabajosRealizados.map((trabajo) => ({
        titulo: trabajo.titulo,
        imagen: trabajo.imagen, // Array de URLs de imágenes
        descripcion: trabajo.descripcion,
        fecha: trabajo.fecha,
      })),
    });
    const nuevoMaestro = await maestro.save();
    res.status(201).json(nuevoMaestro);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el maestro' });
  }
};

// Modificar un maestro
export const updateMaestro = async (req, res) => {
  const { id } = req.params;
  const { nombre, categorias, calificacion, trabajosRealizados } = req.body;
  try {
    const maestro = await Maestro.findById(id);
    if (!maestro) {
      res.status(404).json({ error: 'Maestro no encontrado' });
      return;
    }
    maestro.nombre = nombre;
    correo.correo = correo;
    telefono.telefono = telefono;
    maestro.categorias = categorias;
    maestro.calificacion = calificacion;
    maestro.trabajosRealizados = trabajosRealizados.map((trabajo) => ({
      titulo: trabajo.titulo,
      imagen: trabajo.imagen, // Array de URLs de imágenes
      descripcion: trabajo.descripcion,
      fecha: trabajo.fecha,
    }));
    const maestroActualizado = await maestro.save();
    res.json(maestroActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el maestro' });
  }
};

// Eliminar un maestro
export const deleteMaestro = async (req, res) => {
  const { id } = req.params;
  try {
    const maestro = await Maestro.findByIdAndDelete(id);
    if (!maestro) {
      res.status(404).json({ error: 'Maestro no encontrado' });
      return;
    }
    res.json({ message: 'Maestro eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el maestro' });
  }
};