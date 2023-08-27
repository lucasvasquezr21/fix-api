// src/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  city : { type: String, required: false },
  phone : { type: String, required: false },
  rol : { type: String, required: false },
  comuna : { type: String, required: false },
  data : { type: Object, required: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;