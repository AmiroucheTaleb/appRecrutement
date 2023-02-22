const jwt = require("jsonwebtoken");
const { jwtSecret, jwtOptions } = require("../authconfig");
const bcrypt = require("bcrypt");
const Postulant = require("../models/postulant");
const Recruteur = require("../models/recruteur");

// Fonction de login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la collection Postulant ou Recruteur
    const user =
      (await Postulant.findOne({ email }).select("+password").exec()) ||
      (await Recruteur.findOne({ email }).select("+password").exec());

    // Si l'utilisateur n'est pas trouvé, retourner une erreur
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Vérifier si le mot de passe est correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Générer un token JWT et le renvoyer dans la réponse
    const token = jwt.sign(
      { userId: user._id, userType: user.type },
      jwtSecret,
      jwtOptions
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = login;
