const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("express-async-errors")

dotenv.config();

const app = express();

const port = process.env.PORT;

const routes = require("./routes/mainRoutes");

//middlewares
app.use(express.json()); // Middleware to accept JSON from the client
app.use(morgan("tiny")); // Middleware to log the client's requests
app.use("/", routes); // Middleware to get all routes from mainRoutes.js

// Start the server

app.listen(port, () => {
  console.log(`server listening on: http://localhost:${port}`);
});
