const mongoose = require("mongoose");
const User = require("./user");

const PostulantSchema = new mongoose.Schema({
  cv: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  portfolio: {
    type: String,
  },
});

const Postulant = User.discriminator("Postulant", PostulantSchema);

module.exports = Postulant;
