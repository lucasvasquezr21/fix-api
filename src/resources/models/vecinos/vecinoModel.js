// src/models/veinoModel.js
import mongoose from 'mongoose';

const vecinoSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  comuna : { type: String, required: false },
  city : { type: String, required: false },
  phone : { type: String, required: false },
  address : { type: String, required: false },
  data : { type: Object, required: false },
}, { timestamps: true });

const Vecino = mongoose.model('Vecino', vecinoSchema);

export default Vecino;