// src/models/alertaModel.js
import mongoose from 'mongoose';

const alertaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ubication: { type: String, required: false },
  latitude: { type: String, required: false },
  longitude: { type: String, required: false },
  comuna: { type: String, required: false },
  poblacion: { type: String, required: false },
  img: { type: String, required: false },
  date: { type: Date, required: false },
  data: { type: Object, required: false }
}, { timestamps: true });

const Alerta = mongoose.model('Alerta', alertaSchema);

export default Alerta;