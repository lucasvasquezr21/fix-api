// src/models/comunaModel.js
import mongoose from 'mongoose';

const comunaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  alcalde: { type: String, required: true },
  poblacion: { type: String, required: false },
  codigo: { type: String, required: false },
  coordenadas: { type: String, required: false },
  gentilicio: { type: String, required: false },
  provincia: { type: String, required: false },
  logo: { type: String, required: false },
  escudo: { type: String, required: false },
  date: { type: Date, required: false },
  data: { type: Object, required: false }
}, { timestamps: true });

const Comuna = mongoose.model('Comuna', comunaSchema);

export default Comuna;