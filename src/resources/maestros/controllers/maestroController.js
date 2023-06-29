// src/controllers/maestroController.js
import Maestro from '../models/maestroModel.js';

// Obtener todos los maestros
// export const getMaestros = async (req, res) => {
//   try {
//     const maestros = await Maestro.find().populate('categories');
//     res.json(maestros);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los maestros' });
//   }
// };

export const getMaestros = async (req, res) => {
  try {
    // Obtener todos los maestros de la base de datos
    const maestros = await Maestro.find();

    // Enviar una respuesta al cliente
    res.status(200).json(maestros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los maestros' });
  }
};

export const getMaestroById = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar un maestro por su ID en la base de datos
    const maestro = await Maestro.findById(id);
    if (!maestro) {
      return res.status(404).json({ message: 'Maestro no encontrado' });
    }

    // Enviar una respuesta al cliente
    res.status(200).json(maestro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener el maestro' });
  }
};

// Crear un maestro
// export const createMaestro = async (req, res) => {
//   const { name, email, password, country, city, phone, categories, rate, works } = req.body;
//   try {
//     const maestro = new Maestro({
//       name,
//       email,
//       password,
//       country,
//       city,
//       phone,
//       categories,
//       rate,
//       works: works.map((work) => ({
//         title: work.title,
//         img: work.img, // Array de URLs de imágenes
//         description: work.description,
//         date: work.date,
//       })),
//     });
//     const nuevoMaestro = await maestro.save();
//     res.status(201).json(nuevoMaestro);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el maestro' });
//   }
// };

// Modificar un maestro
export const updateMaestro = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, categories, rate, works } = req.body;
  try {
    const maestro = await Maestro.findById(id);
    if (!maestro) {
      res.status(404).json({ error: 'Maestro no encontrado' });
      return;
    }
    maestro.name = name;
    maestro.email = email;
    maestro.phone = phone;
    maestro.categories = categories;
    maestro.rate = rate;
    maestro.works = works.map((work) => ({
      title: work.title,
      img: work.img, // Array de URLs de imágenes
      description: work.description,
      date: work.date,
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