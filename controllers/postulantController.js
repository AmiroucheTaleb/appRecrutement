const Postulant = require("../models/postulant");
// liste des postulants
const getAllPostulants = async (req, res) => {
  try {
    const postulant = await Postulant.find();
    res.json(postulant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// nouveau postulant

const createPostulant = async (req, res) => {
  try {
    const postulantData = req.body;
    console.log(postulantData);
    const postulant = new Postulant(postulantData);
    await postulant.save();
    res.json(postulant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//récupérer un postulant
const getPostulant = async (req, res) => {
  try {
    const postulantId = req.params.id;
    console.log("recuperation du postulant avec l'id : " + postulantId);
    const postulant = await Postulant.findById(postulantId);
    res.json(postulant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// mettre à jour un postulant
const updatePostulant = async (req, res) => {
  try {
    const postulantId = req.params.id;
    const updateData = req.body;
    console.log(updateData);
    const postulant = await Postulant.findByIdAndUpdate(
      postulantId,
      updateData,
      { new: true }
    );
    res.json(postulant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// supprimer un postulant
const deletePostulant = async (req, res) => {
  try {
    const postulantId = req.params.id;
    console.log("postulannt supprimer");
    const result = await Postulant.findByIdAndDelete(postulantId);
    res.json(result);
    console.log(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//exportation des fonctions
module.exports = {
  createPostulant,
  getPostulant,
  updatePostulant,
  deletePostulant,
  getAllPostulants,
};
