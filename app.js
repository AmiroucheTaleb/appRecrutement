const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);

// Import des routes
const postulantRoutes = require("./routes/postulantroutes");

// Configuration de l'application Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration de la connexion à la base de données MongoDB sur Atlas
const dbURI =
  "mongodb+srv://fabrikteam:N3a4iPTxAFogwB0M@apprecrutement.jvyhlym.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.log("Erreur de connexion à MongoDB", err));

// Configuration des routes
app.use("/api", postulantRoutes);

// Configuration du port d'écoute
const port = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
