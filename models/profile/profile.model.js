const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileCustomersSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  lastname: { type: String, required: true },
  telefone: { type: String, required: true },
});

module.exports = mongoose.model('ProfileCustomersSchema', ProfileCustomersSchema);