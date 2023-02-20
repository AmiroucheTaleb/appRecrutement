const mongoose = require("mongoose");

const offreSchema = new mongoose.Schema({
  IdRecruteur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "recruteur",
    required: true,
  },
  IdCategorie: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Categorie",
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  Deadline: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("offre", offreSchema);
