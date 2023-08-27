// src/models/veinoModel.js
import mongoose from 'mongoose';

const vecinoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apellidop : { type: String, required: true }, 
  apellidom : { type: String, required: false },
  rut : { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  comuna : { type: String, required: true },
  city : { type: String, required: true },
  phone : { type: String, required: true },
  address : { type: String, required: true },
  data : { type: Object, required: false },
}, { timestamps: true });

const Vecino = mongoose.model('Vecino', vecinoSchema);

export default Vecino;