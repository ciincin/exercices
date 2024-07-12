const express = require("express");
const router = express.Router();
let planets = require("../data/planets.js");
const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
});

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Simple route to get all planets (for testing purposes)
router.get("/planets", (req, res) => {
  res.json(planets);
});

router.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  const resquestedPlanet = planets.find((planet) => planet.id === Number(id));
  res.json(resquestedPlanet);
});

router.post("/planets", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const id = planets.length + 1;

  const newPlanet = { id: id, name: name };

  const validation = planetSchema.validate(newPlanet);
  console.log(validation);

  if (validation.error) {
    res.status(400).json(validation.error.details[0].message);
    return;
  }
  planets.push(newPlanet);
  res.status(201).json({ msg: "success!" });
  // res.status(201).json(planets)
});

router.put("/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const changePlanet = planets.find((planet) => planet.id === Number(id));
  changePlanet.name = name;
  res.status(200).json({ changePlanet, planets });
});

router.delete("/planets/:id", (req, res) => {
  const { id } = req.params;
  const newPlanets = planets.filter((planet) => {
    return planet.id != Number(id);
  });
  res.status(200).json({ msg: "planet delete", newPlanets });
});

router.get("/error", async(req, res)=>{
  throw new Error("Async error")
})

// // Error handling middleware (must be placed after all routes)
// router.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send("Something is wrong");
// });

module.exports = router;
