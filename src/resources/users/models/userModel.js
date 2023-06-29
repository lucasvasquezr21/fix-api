// src/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  city : { type: String, required: false },
  phone : { type: String, required: false },
  
});

const User = mongoose.model('User', userSchema);

export default User;