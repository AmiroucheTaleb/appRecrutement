const express = require("express");
const router = express.Router();
const Candidature = require("../models/Candidature");

//Getting All
router.get("/", async (req, res) => {
  try {
    const candidaturerouter = await Candidature.find();
    res.json(candidaturerouter);
  } catch (err) {
    res.status(500).json({ message: err.message, status: err.status });
  }
});

//Getting one
router.get("/:id", async (req, res) => {
  try {
    const candi = await Candidature.findById(req.params.id);

    res.status(200).json(candi);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Creating one
router.post("/", async (req, res) => {
  const candidaturerouter = new Candidature({
    IdOffre: req.body.IdOffre,
    Lettre_de_motivation: req.body.Lettre_de_motivation,
    Lettre_de_recommandation: req.body.Lettre_de_recommandation,
  });
  try {
    const newCandidature = await candidaturerouter.save();
    res.status(201).json(newCandidature);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one
router.patch("/:id", async (req, res) => {
  try {
    const candidatureid = req.params.id;
    const updatedata = req.body;
    const updatedCandidature = await Candidature.findByIdAndUpdate(
      candidatureid,
      updatedata
    );

    res.json(updatedCandidature);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one
router.delete("/:id", async (req, res) => {
  try {
    const deletedcandidature = await Candidature.findByIdAndDelete(
      req.params.id
    );

    res.json({ message: "deleted candidature" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.off = Offre;
});

module.exports = router;
