require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
const Categorie = require("./models/Categorie");
const Offre = require("./models/Offre");
const postulant = require("./models/postulant");
const recruteur = require("./models/recruteur");
const user = require("./models/user");
const Candidature = require("./models/Candidature");
const admin = require("./models/admin");
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://fabrikteam:N3a4iPTxAFogwB0M@apprecrutement.jvyhlym.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const CategorieRouter = require("./routes/categorierouter");
app.use("/categorierouter", CategorieRouter);

const OffreRouter = require("./routes/offrerouter");
app.use("/offrerouter", OffreRouter);

const CandidatureRouter = require("./routes/candidaturerouter");
app.use("/candidaturerouter", CandidatureRouter);

app.get("/users", (req, res) => {
  res.json(users);
});

// run();
// async function run() {
//   try {
//     const categorie = await Categorie.create({
//       Title: "Developers",
//       CreatedAt: "2023-02-20",
//     });

//     console.log(categorie);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const offre = await Offre.create({
//       IdRecruteur: "63f3661150aa33c552ad51a6",
//       IdCategorie: "63f34250e96c4233cbcf5feb",
//       Title: " web designer",
//       CreatedAt: "2023-02-20",
//       updatedAt: "2023-02-21",
//       description: "ghchgchgccjhvjhvjvjvhjv",
//       Deadline: "2023-03-15",
//     });

//     console.log(offre);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const candidature = await Candidature.create({
//       IdOffre: "63f369f0fe501f5b4469c03c",
//       Lettre_de_motivation: "lalalala",
//       Lettre_de_recommandation: "lololololo",
//     });

//     console.log(candidature);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
