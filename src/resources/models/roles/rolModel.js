// src/models/rolModel.js
import mongoose from 'mongoose';

const rolSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  permissions: { type: Object, required: false },
  data: { type: Object, required: false }
}, { timestamps: true });

const Rol = mongoose.model('Rol', rolSchema);

export default Rol;