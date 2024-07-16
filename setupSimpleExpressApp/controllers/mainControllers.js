let planets = require("../data/planets.js");
const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
});

const mainControllers = {
  home: (req, res) => {
    res.send("Hello, World!");
  },
  getPlanets: (req, res) => {
    res.json(planets);
  },
  GetPlanetById: (req, res) => {
    const { id } = req.params;
    const resquestedPlanet = planets.find((planet) => planet.id === Number(id));
    res.json(resquestedPlanet);
  },
  error: async (req, res) => {
    throw new Error("Async error");
  },

  createPlanet: (req, res) => {
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

    planets = [...planets, newPlanet];

    res.status(201).json({ planets, msg: "success!" });
    // res.status(201).json(planets)
  },
  updatePlanet: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // const changePlanet = planets.find((planet) => planet.id === Number(id));

    planets.map((planet) => {
      if (planet.id === Number(id)) {
        planet.name = name;
      }
      return planet;
    });

    res.status(200).json({ planets });
  },
  deletePlanet: (req, res) => {
    const { id } = req.params;
    const newPlanets = planets.filter((planet) => {
      return planet.id != Number(id);
    });
    res.status(200).json({ msg: "planet delete", newPlanets });
  },
};

module.exports = mainControllers;
