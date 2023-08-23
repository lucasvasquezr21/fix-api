import Alerta from './alertaModel.js';

// Obtener todos los alertas
export const getAlertas = async (req, res) => {
  try {
    const alertas = await Alerta.find();
    res.status(200).json(alertas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los alertas' });
  }
};

// Obtener un alerta por ID
export const getAlertaById = async (req, res) => {
  const { id } = req.params;
  try {
    const alerta = await Alerta.findById(id);
    if (!alerta) {
      return res.status(404).json({ message: 'Alerta no encontrado' });
    }
    res.status(200).json(alerta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener la alerta' });
  }
};

// Crear un alerta
export const createAlerta = async (req, res) => {
  const { title, description, ubication, img, date, data} = req.body;
  try {
    const alerta = new Alerta({
      title,
      description,
      ubication,
      img,
      date,
      data
    });
    const nuevaAlerta = await alerta.save();
    res.status(201).json(nuevaAlerta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la alerta' });
  }
};

// Modificar un alerta
export const updateAlerta = async (req, res) => {
  const { id } = req.params;
  const { title, description, ubication, img, date, data} = req.body;
  try {
    const alerta = await Alerta.findById(id);
    if (!alerta) {
      res.status(404).json({ error: 'Alerta no encontrada' });
      return;
    }
    alerta.title = title;
    alerta.description = description;
    alerta.ubication = ubication;
    alerta.img = img;
    alerta.date = date;
    alerta.data = data;

    const alertaActualizada = await alerta.save();
    res.status(200).json(alertaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la alerta' });
  }
};

// Eliminar un alerta
export const deleteAlerta = async (req, res) => {
  const { id } = req.params;
  try {
    const alerta = await Alerta.findByIdAndDelete(id);
    if (!alerta) {
      res.status(404).json({ error: 'Alerta no encontrada' });
      return;
    }
    res.json({ message: 'Alerta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la alerta' });
  }
};
