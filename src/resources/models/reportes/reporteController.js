import Reporte from './reporteModel.js';

// Obtener todas las reportes
export const getReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reportes' });
  }
};

// Obtener una reporte por id
export const getReporteById = async (req, res) => {
  const { id } = req.params;
  try {
    const reporte = await Reporte.findById(id);
    if (!reporte) {
      res.status(404).json({ error: 'Reporte no encontrado' });
      return;
    }
    res.json(reporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el reporte' });
  }
};

// Crear un reporte
export const createReporte = async (req, res) => {
  const { title } = req.body;
  try {
    const nuevoReporte = await Reporte.create({
       title,
       usuario,
       description,
       img,
       ubication,
       date,
       data,
      });
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el reporte' });
  }
};

// Modificar una reporte
export const updateReporte = async (req, res) => {
  const { id } = req.params;
  const { title, description, img, ubication, date } = req.body;
  try {
    const reporteActualizado = await Reporte.findByIdAndUpdate(
      id,
      { title, usuario, description, img, ubication, date, data},
      { new: true }
    );
    if (!reporteActualizado) {
      res.status(404).json({ error: 'Reporte no encontrado' });
      return;
    }
    res.json(reporteActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el reporte' });
  }
};

// Eliminar una reporte
export const deleteReporte = async (req, res) => {
  const { id } = req.params;
  try {
    const reporteEliminado = await Reporte.findByIdAndDelete(id);
    if (!reporteEliminado) {
      res.status(404).json({ error: 'Reporte no encontrada' });
      return;
    }
    res.json({ message: 'Reporte eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la reporte' });
  }
};