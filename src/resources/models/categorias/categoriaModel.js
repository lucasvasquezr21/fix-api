// src/models/categoriaModel.js
import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: { type: String, required: false },
  date: { type: Date, required: false },
  data: { type: Object, required: false }
}, { timestamps: true });

const Categoria = mongoose.model('Categoria', categoriaSchema);

export default Categoria;