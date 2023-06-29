// src/controllers/categoriaController.js
import Categoria from '../models/categoriaModel.js';

// Obtener todas las categorías
export const getCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.find();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};
// Crear una categoría
export const createCategoria = async (req, res) => {
  const { category } = req.body;
  try {
    const categoria = new Categoria({ category });
    const nuevaCategoria = await categoria.save();
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

// Modificar una categoría
export const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  try {
    const categoria = await Categoria.findById(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoría no encontrada' });
      return;
    }
    categoria.category = category;
    const categoriaActualizada = await categoria.save();
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la categoría' });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByIdAndDelete(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoría no encontrada' });
      return;
    }
    res.json({ message: 'Categoría eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};
