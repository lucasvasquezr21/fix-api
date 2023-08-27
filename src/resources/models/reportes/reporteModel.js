// src/models/categoriaModel.js
import mongoose from 'mongoose';

const reporteSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  usuario: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: false },
  ubication: { type: String, required: true },
  date: { type: Date, required: false },
  data: { type: Object, required: false },
}, { timestamps: true });

const Reporte = mongoose.model('Reporte', reporteSchema);

export default Reporte;