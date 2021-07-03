const express = require("express");
const router = express.Router();
const Series = require("../models/series");

router.get("/", async (req, res) => {
  try {
    const allSeries = await Series.find();
    res.json(allSeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One Series
router.get("/:id", getSeriesById, async (req, res) => {
  res.status(200).json(res.series);
});

// Post a question
router.post("/", async (req, res) => {
  const series = new Series({
    Slug: req.body.Slug,
    Genre: req.body.Genre,
    Description: req.body.Description,
    YoutubePlaylistUrl: req.body.YoutubePlaylistUrl,
    Name: req.body.Name,
  });
  try {
    const newSeries = await series.save();
    res.status(201).json(newSeries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.patch("/:id", async (req, res) => {
  res.send({
    message: "HAHA We Don't update here",
  });
});

// Delete
router.delete("/:id", getSeriesById, async (req, res) => {
  try {
    await res.series.remove();
    res.json({ message: "Deleted Series" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

async function getSeriesById(req, res, next) {
  let series;
  try {
    series = await Snippets.findById(req.params.id);
    if (series == null) {
      return res.status(404).json({
        message: "series does not exist",
      });
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }

  res.series = series;
  next();
}

module.exports = router;
