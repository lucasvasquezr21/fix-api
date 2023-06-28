// src/models/maestroModel.js
import mongoose from 'mongoose';

const maestroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: false },
  categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],
  calificacion: { type: Number, default: 0 },
  trabajosRealizados: [
    {
      titulo: { type: String, required: false },
      imagen: [{ type: String, required: false }],
      descripcion: { type: String, required: false },
      fecha: { type: Date, required: true },
    }
  ],
});

const Maestro = mongoose.model('Maestro', maestroSchema);

export default Maestro;