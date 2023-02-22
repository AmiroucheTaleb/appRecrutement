const express = require("express");
const router = express.Router();
const Offre = require("../models/Offre");

//Getting All
router.get("/", async (req, res) => {
  try {
    const offrerouter = await Offre.find();
    res.json(offrerouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const ofr = await Offre.findById(req.params.id);

    res.status(200).json(ofr);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.Categorie = Categorie;
});

//Creating one
router.post("/", async (req, res) => {
  const offrerouter = new Offre({
    IdRecruteur: req.body.IdRecruteur,
    IdCategorie: req.body.IdCategorie,
    Title: req.body.Title,
    CreatedAt: req.body.CreatedAt,
    updatedAt: req.body.updatedAt,
    description: req.body.description,
    Deadline: req.body.Deadline,
  });
  try {
    const newOffre = await offrerouter.save();
    res.status(201).json(newOffre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const offreid = req.params.id;
    const updatedata = req.body;
    const updatedOffre = await Offre.findByIdAndUpdate(offreid, updatedata);

    res.json(updatedOffre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  res.off = Offre;
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const deletedoffre = await Offre.findByIdAndDelete(req.params.id);

    res.json({ message: "deleted offre" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.off = Offre;
});

module.exports = router;
