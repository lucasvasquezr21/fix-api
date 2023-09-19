// src/models/categoriaModel.js
import mongoose from 'mongoose';

const reporteSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  usuario: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: false },
  ubication: { type: String, required: true },
  comuna: { type: String, required: true },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
  poblacion: { type: String, required: false },
  date: { type: Date, required: false },
  data: { type: Object, required: false },
}, { timestamps: true });

const Reporte = mongoose.model('Reporte', reporteSchema);

export default Reporte;