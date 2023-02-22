const Recruteur = require("../models/recruteur");
// liste des Recruteurs
const getAllRecruteurs = async (req, res) => {
  try {
    const recruteur = await Recruteur.find();
    res.json(recruteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// nouveau Recruteur

const createRecruteur = async (req, res) => {
  try {
    const RecruteurData = req.body;
    console.log(RecruteurData);
    const recruteur = new Recruteur(RecruteurData);
    await recruteur.save();
    res.json(recruteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//récupérer un Recruteur
const getRecruteur = async (req, res) => {
  try {
    const RecruteurId = req.params.id;
    console.log("recuperation du Recruteur avec l'id : " + RecruteurId);
    const recruteur = await Recruteur.findById(RecruteurId);
    res.json(recruteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// mettre à jour un Recruteur
const updateRecruteur = async (req, res) => {
  try {
    const RecruteurId = req.params.id;
    const updateData = req.body;
    console.log(updateData);
    const recruteur = await Recruteur.findByIdAndUpdate(
      RecruteurId,
      updateData,
      { new: true }
    );
    res.json(recruteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// supprimer un Recruteur
const deleteRecruteur = async (req, res) => {
  try {
    const RecruteurId = req.params.id;
    console.log("recruteur supprimer");
    const resultat = await Recruteur.findByIdAndDelete(RecruteurId);
    res.json(resultat);
    console.log(resultat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//exportation des fonctions
module.exports = {
  createRecruteur,
  getRecruteur,
  updateRecruteur,
  deleteRecruteur,
  getAllRecruteurs,
};
