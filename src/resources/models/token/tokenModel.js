// src/models/tokenModel.js
import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true},
}, { timestamps: true });

const Token = mongoose.model('Token', tokenSchema);

export default Token;