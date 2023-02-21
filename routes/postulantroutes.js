const express = require("express");
const router = express.Router();
const postulantController = require("../controllers/postulantController");

// Route pour récupérer tous les postulants
router.get("/postulants", postulantController.getAllPostulants);

// Route pour récupérer un postulant spécifique
router.get("/postulants/:id", postulantController.getPostulant);

// Route pour ajouter un postulant
router.post("/postulants", postulantController.createPostulant);

// Route pour mettre à jour un postulant
router.put("/postulants/:id", postulantController.updatePostulant);

// Route pour supprimer un postulant
router.delete("/postulants/:id", postulantController.deletePostulant);

// exportation des routes
module.exports = router;
