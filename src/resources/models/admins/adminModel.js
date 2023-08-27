// src/models/adminModel.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  country : { type: String, required: true },
  comuna : { type: String, required: true },
  city : { type: String, required: true },
  phone : { type: String, required: true },
  rol : { type: String, required: true },
  data : { type: Object, required: false },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;