import Notificacion from './notificacionModel.js';

// Obtener todos los notificaciones
export const getNotificaciones = async (req, res) => {
  try {
    const notificaciones = await Notificacion.find();
    res.status(200).json(notificaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los notificaciones' });
  }
};

// Obtener un notificacion por ID
export const getNotificacionById = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacion = await Notificacion.findById(id);
    if (!notificacion) {
      return res.status(404).json({ message: 'Notificacion no encontrado' });
    }
    res.status(200).json(notificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener la notificacion' });
  }
};

// Crear un notificacion
export const createNotificacion = async (req, res) => {
  const { title, description, user, img, date, data} = req.body;
  try {
    const notificacion = new Notificacion({
      title,
      description,
      user,
      img,
      date,
      data
    });
    const nuevaNotificacion = await notificacion.save();
    res.status(201).json(nuevaNotificacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la notificacion' });
  }
};

// Modificar un notificacion
export const updateNotificacion = async (req, res) => {
  const { id } = req.params;
  const { title, description, user, img, date, data} = req.body;
  try {
    const notificacion = await Notificacion.findById(id);
    if (!notificacion) {
      res.status(404).json({ error: 'Notificacion no encontrada' });
      return;
    }
    notificacion.title = title;
    notificacion.description = description;
    notificacion.user = user;
    notificacion.img = img;
    notificacion.date = date;
    notificacion.data = data;

    const notificacionActualizada = await notificacion.save();
    res.status(200).json(notificacionActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la notificacion' });
  }
};

// Eliminar un notificacion
export const deleteNotificacion = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacion = await Notificacion.findByIdAndDelete(id);
    if (!notificacion) {
      res.status(404).json({ error: 'Notificacion no encontrada' });
      return;
    }
    res.json({ message: 'Notificacion eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la notificacion' });
  }
};
