import Categoria from './categoriaModel.js';

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

// Obtener una categoría por id
export const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findById(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoría no encontrada' });
      return;
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

// Crear una categoría
export const createCategoria = async (req, res) => {
  const { title } = req.body;
  try {
    const nuevaCategoria = await Categoria.create({
       title,
       description,
       img,
       date
      });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

// Modificar una categoría
export const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { title, description, img, date } = req.body;
  try {
    const categoriaActualizada = await Categoria.findByIdAndUpdate(
      id,
      { title, description, img, date},
      { new: true }
    );
    if (!categoriaActualizada) {
      res.status(404).json({ error: 'Categoría no encontrada' });
      return;
    }
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la categoría' });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoriaEliminada = await Categoria.findByIdAndDelete(id);
    if (!categoriaEliminada) {
      res.status(404).json({ error: 'Categoría no encontrada' });
      return;
    }
    res.json({ message: 'Categoría eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};