// import Tarea from './tareaModel.js';

// // Obtener todas las tareas
// export const getTareas = async (req, res) => {
//   try {
//     const tareas = await Tarea.find();
//     res.json(tareas);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener las tareas' });
//   }
// };

// // Obtener una tarea por id
// export const getTareasById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const tarea = await Tarea.findById(id);
//     if (!tarea) {
//       res.status(404).json({ error: 'Tarea no encontrada' });
//       return;
//     }
//     res.json(tarea);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener la tarea' });
//   }
// };

// // Crear un tarea
// export const createTarea = async (req, res) => {
//   const { title } = req.body;
//   try {
//     const nuevoTarea = await Tarea.create({
//        title,
//        usuario,
//        description,
//        img,
//        ubication,
//        date,
//        data,
//       });
//     res.status(201).json(nuevoReporte);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el tarea' });
//   }
// };

// // Modificar una tarea
// export const updateReporte = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, img, ubication, date } = req.body;
//   try {
//     const reporteActualizado = await Tarea.findByIdAndUpdate(
//       id,
//       { title, usuario, description, img, ubication, date, data},
//       { new: true }
//     );
//     if (!reporteActualizado) {
//       res.status(404).json({ error: 'Tarea no encontrado' });
//       return;
//     }
//     res.json(reporteActualizado);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al modificar el tarea' });
//   }
// };

// // Eliminar una tarea
// export const deleteReporte = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const reporteEliminado = await Tarea.findByIdAndDelete(id);
//     if (!reporteEliminado) {
//       res.status(404).json({ error: 'Tarea no encontrada' });
//       return;
//     }
//     res.json({ message: 'Tarea eliminada exitosamente' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar la tarea' });
//   }
// };