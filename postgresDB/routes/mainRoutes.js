const mainControllers= require("../controllers/mainControllers")
const express = require("express");
const router = express.Router();
const multer = require("multer");



const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "assets/")
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()* 1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg")
    }
})

const upload = multer({storage: storage})

router.get("/", mainControllers.home);

// Simple route to get all planets (for testing purposes)
router.get("/planets", mainControllers.getPlanets);

router.get("/planets/:id", mainControllers.GetPlanetById);

router.post("/planets", mainControllers.createPlanet);

router.put("/planets/:id", mainControllers.updatePlanet);

router.delete("/planets/:id", mainControllers.deletePlanet);

router.get("/error", mainControllers.error);

router.post("/planets/:id/image", upload.single("planet-image"), mainControllers.addPlanetImage);

router.post("/login", mainControllers.logIn);
router.post("/signup", mainControllers.signUp)


// // Error handling middleware (must be placed after all routes)
// router.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send("Something is wrong");
// });

module.exports = router;
