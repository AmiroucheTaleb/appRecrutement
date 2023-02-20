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

const Recruteur = User.discriminator("Recruteur", RecruteurSchema);

module.exports = Recruteur;
