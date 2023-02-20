const mongoose = require("mongoose");
const express = require("express");
mongoose.set("strictQuery", false);
const Postulant = require("./models/postulant");
const Recruteur = require("./models/recruteur");
const admin = require("./models/admin");
mongoose.connect(
  "mongodb+srv://fabrikteam:N3a4iPTxAFogwB0M@apprecrutement.jvyhlym.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  },
  (e) => console.error(e)
);

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

admin
  .find()
  .then((admin) => {
    console.log(admin);
  })
  .catch((error) => {
    console.log(error);
  });
