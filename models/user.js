const mongoose = require("mongoose");

//schema de "User"
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  numeroTel: {
    type: Number,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
});

//le modèle "User" à partir du schéma
const User = mongoose.model("User", UserSchema);

module.exports = User;
