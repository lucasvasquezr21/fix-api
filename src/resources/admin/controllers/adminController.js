// src/controllers/adminController.js
import Admin from '../models/adminModel.js';

// Obtener todos los admin
// export const getAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.find().populate('categories');
//     res.json(admin);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los admins' });
//   }
// };

export const getAdmin = async (req, res) => {
  try {
    // Obtener todos los Admin de la base de datos
    const admin = await Admin.find();

    // Enviar una respuesta al cliente
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los admins' });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar un admin por su ID en la base de datos
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }

    // Enviar una respuesta al cliente
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener el admin' });
  }
};

// Crear un admin
export const admin = async (req, res) => {
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
        img: work.img, // Array de URLs de imágenes
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
      img: work.img, // Array de URLs de imágenes
      description: work.description,
      date: work.date,
    }));
    const adminActualizado = await admin.save();
    res.json(adminActualizado);
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