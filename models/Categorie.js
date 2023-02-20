const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("categorie", categorieSchema);
