const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthenticateSigninSchema = new Schema({
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true }
});

module.exports = mongoose.model('AuthenticateSignin', AuthenticateSigninSchema);

const AuthenticateSignupPartnersSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  linkyoutube: { type: String, required: true },
  linkspotify: { type: String, required: true },
  travel: { type: String, required: true },
  type: { type: String, required: true },
  musicalstyle: { type: String, required: true },
  city: { type: String, required: true },
  telefone: { type: String, required: true },
  image: { type: String, required: false },
  typeuser: { type: String, required: true }
});

module.exports = mongoose.model('AuthenticateSignupPartners', AuthenticateSignupPartnersSchema);

const AuthenticateSignupCustomersSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: false },
  postalcode: { type: String, required: false },
  city: { type: String, required: false },
  password: { type: String, required: true },
  travel: { type: String, required: false },
  linkyoutube: { type: String, required: false },
  linkspotify: { type: String, required: false },
  musicalstyle: { type: String, required: false },
  type: { type: String, required: false },
  confirmpassword: { type: String, required: true },
  image: { type: String, required: false },
  typeuser: { type: String, required: true }
});

module.exports = mongoose.model('AuthenticateSignupCustomers', AuthenticateSignupCustomersSchema);