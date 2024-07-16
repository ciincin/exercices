import { getAll, getOneById, create, updateById, deleteById } from "..controllers/planets.js";
import { deleteById } from "../controllers/planets.js";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Simple route to get all planets (for testing purposes)
router.get("/planets", getAll);

router.get("/planets/:id", getOneById);

router.post("/planets", create);

router.put("/planets/:id", updateById);

router.delete("/planets/:id", deleteById);

router.get("/error", async (req, res) => {
  throw new Error("Async error");
});

// // Error handling middleware (must be placed after all routes)
// router.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send("Something is wrong");
// });

module.exports = router;
