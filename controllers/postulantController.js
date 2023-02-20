const Postulant = require("../models/postulant");
// Fonction pour créer un nouveau postulant
async function createPostulant(postulantData) {
  try {
    const Postulant = new Postulant(postulantData);
    await Postulant.save();
    return Postulant;
  } catch (error) {
    throw new Error(error);
  }
}

// Fonction pour récupérer un postulant existant
async function getPostulant(postulantId) {
  try {
    const Postulant = await Postulant.findById(postulantId);
    return Postulant;
  } catch (error) {
    throw new Error(error);
  }
}

// Fonction pour mettre à jour un postulant existant
async function updatePostulant(postulantId, updateData) {
  try {
    const Postulant = await Postulant.findByIdAndUpdate(
      postulantId,
      updateData,
      { new: true }
    );
    return Postulant;
  } catch (error) {
    throw new Error(error);
  }
}

// Fonction pour supprimer un postulant existant
async function deletePostulant(postulantId) {
  try {
    const result = await Postulant.findByIdAndDelete(postulantId);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createPostulant,
  getPostulant,
  updatePostulant,
  deletePostulant,
};
