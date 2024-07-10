
const express = require("express");
const router = express.Router();
const planets = require("../data/planets.js")


router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Simple route to get all planets (for testing purposes)
router.get("/planets", (req, res) => {
  res.json(planets);
});

router.get("/planets/:id", (req, res) => {
  res.json(planets);
});

// Error handling middleware (must be placed after all routes)
router.use((error, req, res, next)=>{

  console.error(error.stack);
  res.status(500).send("Something is wrong")
})

module.exports = router;
