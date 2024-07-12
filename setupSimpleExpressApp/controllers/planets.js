let planets = require("../data/planets.js");
const Joi = require("joi");

const planetSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
});

const getAll = (req, res) => {
  res.json(planets);
};

const getOneById = (req, res) => {
  const { id } = req.params;
  const resquestedPlanet = planets.find((planet) => planet.id === Number(id));
  res.json(resquestedPlanet);
};

const create = (req, res) => {
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
};

const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const changePlanet = planets.find((planet) => planet.id === Number(id));
  changePlanet.name = name;
  res.status(200).json({ changePlanet, planets });
};

const deleteById = (req, res) => {
    const { id } = req.params;
    const newPlanets = planets.filter((planet) => {
      return planet.id != Number(id);
    });
    res.status(200).json({ msg: "planet delete", newPlanets });
  }

export { getAll, getOneById, create, updateById, deleteById };
