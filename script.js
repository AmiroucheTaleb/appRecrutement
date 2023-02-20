const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Postulant = require("./models/postulant");
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

Postulant.find()
  .then((postulants) => {
    console.log(postulants);
  })
  .catch((error) => {
    console.log(error);
  });
