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
  const { name, email, password, country, city, phone, categories, rate, works } = req.body;
  try {
    const admin = new Admin({
      name,
      email,
      password,
      country,
      city,
      phone,
      categories,
      rate,
      works: works.map((work) => ({
        title: work.title,
        img: work.img,
        description: work.description,
        date: work.date,
      })),
    });
    const nuevoAdmin = await admin.save();
    res.status(201).json(nuevoAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el admin' });
  }
};

// Modificar un admin
export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, categories, rate, works } = req.body;
  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      res.status(404).json({ error: 'Admin no encontrado' });
      return;
    }
    admin.name = name;
    admin.email = email;
    admin.phone = phone;
    admin.categories = categories;
    admin.rate = rate;
    admin.works = works.map((work) => ({
      title: work.title,
      img: work.img,
      description: work.description,
      date: work.date,
    }));
    const adminActualizado = await admin.save();
    res.status(200).json(adminActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el admin' });
  }
};

// Eliminar un admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      res.status(404).json({ error: 'Admin no encontrado' });
      return;
    }
    res.json({ message: 'Admin eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el admin' });
  }
};
