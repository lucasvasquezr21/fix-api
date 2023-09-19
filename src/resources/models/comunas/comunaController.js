import Comuna from './comunaModel.js';

// Obtener todas las categorías
export const getComunas = async (req, res) => {
  try {
    const comunas = await Comuna.find();
    res.json(comunas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las comunas' });
  }
};

// Obtener una categoría por id
export const getComunaById = async (req, res) => {
  const { id } = req.params;
  try {
    const comuna = await Comuna.findById(id);
    if (!comuna) {
      res.status(404).json({ error: 'Comuna no encontrada' });
      return;
    }
    res.json(comuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la comuna' });
  }
};

// Crear una categoría
export const createComuna = async (req, res) => {
  const { nombre, alcalde, poblacion, codigo, latitude, longitude, gentilicio, provincia, logo, escudo, date, data} = req.body;
  try {
    const nuevaComuna = await Comuna.create({
      nombre,
      alcalde,
      poblacion,
      codigo,
      latitude,
      longitude,
      gentilicio,
      provincia,
      logo,
      escudo,
      date,
      data,
      });
    res.status(201).json(nuevaComuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la comuna' });
  }
};

// Modificar una categoría
export const updateComuna = async (req, res) => {
  const { id } = req.params;
  const { nombre, alcalde, poblacion, codigo, latitude, longitude, gentilicio, provincia, logo, escudo, date, data } = req.body;
  try {
    const comunaActualizada = await Comuna.findByIdAndUpdate(
      id,
      { nombre, alcalde, poblacion, codigo, latitude, longitude, gentilicio, provincia, logo, escudo, date, data},
      { new: true }
    );
    if (!comunaActualizada) {
      res.status(404).json({ error: 'Comuna no encontrada' });
      return;
    }
    res.json(comunaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la comuna' });
  }
};

// Eliminar una comuna
export const deleteComuna = async (req, res) => {
  const { id } = req.params;
  try {
    const comunaEliminada = await Comuna.findByIdAndDelete(id);
    if (!comunaEliminada) {
      res.status(404).json({ error: 'Comuna no encontrada' });
      return;
    }
    res.json({ message: 'Comuna eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la comuna' });
  }
};