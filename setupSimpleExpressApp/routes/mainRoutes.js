const mainControllers= require("../controllers/mainControllers")
const express = require("express");
const router = express.Router();

router.get("/", mainControllers.home);

// Simple route to get all planets (for testing purposes)
router.get("/planets", mainControllers.getPlanets);

router.get("/planets/:id", mainControllers.GetPlanetById);

router.post("/planets", mainControllers.createPlanet);

router.put("/planets/:id", mainControllers.updatePlanet);

router.delete("/planets/:id", mainControllers.deletePlanet);

router.get("/error", mainControllers.error);

// // Error handling middleware (must be placed after all routes)
// router.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send("Something is wrong");
// });

module.exports = router;
