// src/models/notificacionModel.js
import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
  img: { type: String, required: false },
  date: { type: Date, required: false },
  data: { type: Object, required: false }
}, { timestamps: true });

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

export default Notificacion;