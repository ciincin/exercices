let planets = require("../data/planets.js");
const Joi = require("joi");
const pgPromise = require("pg-promise");
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

async function setupDB() {
  await db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets
    (id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    )
    `);

  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);

  const planets2 = await db.many(`SELECT * FROM planets`);

  console.log(planets2);
}

// setupDB();

const planetSchema = Joi.object({
  name: Joi.string().alphanum(),
});

//Joi.string().alphanum() si usamos esto, no ponemos {name}, solo ponemos name en la validación

const mainControllers = {
  home: (req, res) => {
    res.send("Hello, World!");
  },
  getPlanets: async (req, res) => {
    const planetList = await db.many(`SELECT * FROM planets ORDER BY id`);
    res.status(200).json(planetList);
  },
  GetPlanetById: async (req, res) => {
    const { id } = req.params;

    const resquestedPlanet = await db.oneOrNone(
      `SELECT * FROM planets ORDER BY id WHERE id = $1`,
      Number(id)
    );
    res.json(resquestedPlanet);
  },
  error: async (req, res) => {
    throw new Error("Async error");
  },

  createPlanet: async (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    const validation = planetSchema.validate({ name });
    console.log(validation);

    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }

    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);

    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`);
    res.status(201).json({ planetChart, msg: "success!" });
  },
  updatePlanet: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const validation = planetSchema.validate({ name });
    console.log(validation);

    if (validation.error) {
      res.status(400).json(validation.error.details[0].message);
      return;
    }

    await db.none(`UPDATE planets SET name = $2 WHERE id= $1`, [
      Number(id),
      name,
    ]);

    const planetChart = await db.many(`SSELECT * FROM planets ORDER BY id`);
    res.status(200).json({ planetChart, msg: "success!" });
  },
  deletePlanet: async (req, res) => {
    const { id } = req.params;

    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));

    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`);
    res.status(200).json({ msg: "planet delete", planetChart });
  },
};

module.exports = mainControllers;
