// src/models/categoriaModel.js
import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

export default Categoria;