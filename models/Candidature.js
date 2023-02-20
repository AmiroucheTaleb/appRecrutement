const mongoose = require("mongoose");

const candidatureSchema = new mongoose.Schema({
  IdOffre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Offre",
    required: true,
  },

  Lettre_de_motivation: {
    type: String,
    required: true,
  },
  Lettre_de_recommandation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("candidature", candidatureSchema);
