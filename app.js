const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import des routes
const postulantRoutes = require("./routes/postulantroutes");
const RecruteurRoutes = require("./routes/recruteurRoutes");
// import des routes postulant et recruteur
app.use("/api", postulantRoutes);
app.use("/api", RecruteurRoutes);
const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);

// Import de la fonction authMiddleware
const authMiddleware = require("./middleware/authMiddleware");
app.use(authMiddleware);
// Configuration de l'application Express

// Configuration de la connexion à la base de données MongoDB sur Atlas
const dbURI =
  "mongodb+srv://fabrikteam:N3a4iPTxAFogwB0M@apprecrutement.jvyhlym.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.log("Erreur de connexion à MongoDB", err));

// Configuration du port d'écoute
const port = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
