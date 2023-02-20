const mongoose = require("mongoose");
const User = require("./user");

const RecruteurSchema = new mongoose.Schema({
  nomEntreprise: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Postulant = User.discriminator("Postulant", PostulantSchema);

module.exports = Postulant;
