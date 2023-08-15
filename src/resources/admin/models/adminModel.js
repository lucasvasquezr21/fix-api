// src/models/adminModel.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  country : { type: String, required: false },
  city : { type: String, required: false },
  phone : { type: String, required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],
  rate: { type: Number, default: 0 },
  works: [
    {
      title: { type: String, required: false },
      img: [{ type: String, required: false }],
      description: { type: String, required: false },
      date: { type: Date, required: true },
    }
  ],
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;