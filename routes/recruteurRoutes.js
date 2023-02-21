const express = require("express");
const router = express.Router();
const RecruteurController = require("../controllers/recruteurController");

// Route pour récupérer tous les Recruteurs
router.get("/recruteurs", RecruteurController.getAllRecruteurs);

// Route pour récupérer un Recruteur spécifique
router.get("/recruteurs/:id", RecruteurController.getRecruteur);

// Route pour ajouter un Recruteur
router.post("/recruteurs", RecruteurController.createRecruteur);

// Route pour mettre à jour un Recruteur
router.put("/recruteurs/:id", RecruteurController.updateRecruteur);

// Route pour supprimer un Recruteur
router.delete("/recruteurs/:id", RecruteurController.deleteRecruteur);

// exportation des routes
module.exports = router;
