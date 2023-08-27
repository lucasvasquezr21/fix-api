// src/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  city : { type: String, required: true },
  phone : { type: String, required: false },
  rol : { type: String, required: true },
  comuna : { type: String, required: true },
  data : { type: Object, required: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;