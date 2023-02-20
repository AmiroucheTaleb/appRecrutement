const mongoose = require("mongoose");
const express = require("express");
mongoose.set("strictQuery", false);
const Postulant = require("./models/postulant");
const Recruteur = require("./models/recruteur");
const admin = require("./models/admin");
const app = express();
mongoose.connect(
  "mongodb+srv://fabrikteam:N3a4iPTxAFogwB0M@apprecrutement.jvyhlym.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  },
  (e) => console.error(e)
);

// Configurer le port
app.set("port", 3000);

// Définir la route pour la page d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur la page d'accueil");
});

// Définir la route pour la page "À propos"
app.get("/about", (req, res) => {
  res.send("À propos de nous");
});

// Écouter les requêtes entrantes
app.listen(app.get("port"), () => {
  console.log(`Serveur en cours d'écoute sur le port ${app.get("port")}`);
});
// const newPostulant = new Postulant({
//   username: "rabah",
//   password: "password123",
//   email: "rabahou@gmail.com",
//   nom: "aouaouche",
//   prenom: "rabah",
//   numeroTel: "1234567890",
//   adresse: "alger centre",
//   cv: "ingenieur en genie civil",
//   linkedin: "https://www.linkedin.com/in/rabahou",
//   portfolio: "https://www.rabahou.com",
// });

// newPostulant.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Nouveau postulant ajouté à la base de données");
//   }
// });
// const newadmin = new admin({
//   username: "abass",
//   password: "password166823",
//   email: "abass@gmail.com",
//   nom: "laghoub",
//   prenom: "abass",
//   numeroTel: "1234567890",
//   adresse: "alger ouest",
// });

// newadmin.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Nouveau admin ajouté à la base de données");
//   }
// });

// admin
//   .find()
//   .then((admin) => {
//     console.log(admin);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
