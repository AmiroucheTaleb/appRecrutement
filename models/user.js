const mongoose = require("mongoose");
const Options = { discriminatorKey: "type", timeStamps: true };
const bcrypt = require("bcrypt");

//schema de "User"
const UserSchema = new mongoose.Schema(
  {
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
  },
  Options
);

// hook exécuté avant de sauvegarder un nouvel utilisateur
UserSchema.pre("save", async function (next) {
  try {
    // Générer le salt (grain de sel) qui sera utilisé pour hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    // Hasher le mot de passe avec le salt
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // Remplacer le mot de passe en clair par le mot de passe hashé
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

//le modèle "User" à partir du schéma
const User = mongoose.model("User", UserSchema);

module.exports = User;
