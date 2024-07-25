const express = require("express")
const router =express.Router()
const controllers = require("../controllers/controllers")

router.get("/", controllers.home)

router.get("/users", controllers.getUsers )

router.get("/users/:id", controllers.getUserById)

module.exports = router
