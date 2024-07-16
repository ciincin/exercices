import pgPromise from "pg-promise";
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
app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send({error: err.message})
})




const db = pgPromise()("postgres://postgres:postgres@localhost:5432/video")

async function setupDb() {
    await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id  SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    );

    `)
    await db.none(`INSERT INTO planets (name) VALUES ("Earth")`)
    await db.none(`INSERT INTO planets (name) VALUES ("Mars")`)

    const planets = await db.many(`SELECT * FROM planets;`)

    console.log(planets);

}

setupDb()


// Start the server

app.listen(port, () => {
    console.log(`server listening on: http://localhost:${port}`);
  });

