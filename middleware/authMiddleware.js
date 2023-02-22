const jwt = require("jsonwebtoken");
const { jwtSecret, jwtOptions } = require("../authconfig");
const Postulant = require("../models/postulant");
const Recruteur = require("../models/recruteur");

const authMiddleware = async (req, res, next) => {
  try {
    // Récupérer le token JWT depuis le header Authorization
    const token = req.headers.authorization.split(" ")[1];

    // Vérifier si le token est valide
    const decodedToken = jwt.verify(token, jwtSecret);

    // Récupérer l'utilisateur correspondant au token
    let user;
    if (req.path.startsWith("/api/postulants")) {
      user = await Postulant.findById(decodedToken.userId);
    } else if (req.path.startsWith("/api/recruteurs")) {
      user = await Recruteur.findById(decodedToken.userId);
    } else {
      return res.status(401).json({ message: "Invalid request" });
    }

    // Vérifier si le mot de passe est valide
    const isPasswordValid = await user.matchPassword(decodedToken.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Créer un nouveau token JWT
    const newToken = jwt.sign({ userId: user._id }, jwtSecret, jwtOptions);

    // Ajouter l'utilisateur et le nouveau token à la requête
    req.user = user;
    req.token = newToken;

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed!" });
  }
};

module.exports = authMiddleware;
