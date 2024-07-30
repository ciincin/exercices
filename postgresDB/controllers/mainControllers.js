let planets = require("../data/planets.js");
const Joi = require("joi");
const db = require("../data/db.js");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

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

    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`);
    res.status(200).json({ planetChart, msg: "success!" });
  },
  deletePlanet: async (req, res) => {
    const { id } = req.params;

    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));

    const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`);
    res.status(200).json({ msg: "planet delete", planetChart });
  },
  addPlanetImage: async (req, res) => {
    const { id } = req.params;
    console.log(req.file.path)

    await db.none(`UPDATE planets SET image = $2 WHERE id = $1`, [
        Number(id),
        req.file.path,
      ]);

      const planetChart = await db.many(`SELECT * FROM planets ORDER BY id`);
      res.status(200).json({ planetChart, msg: "success!" });
  },
  logIn: async (req, res) => {
    const { username, password } = req.body;

    const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);

    if (user && user.password === password) {
      const payload = {
        id: user.id,
        username,
      };

      const SECRET = process.env.SECRET;

      const token = jwt.sign(payload, SECRET);

      console.log(token);

      await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token])

      res.status(200).json({ id:user.id, username, token });
    } else {
      res.status(400).json({ msg: "Username or password incorrect." });
    }
  },
  signUp: async(req, res)=>{
    const {username, password}= req.body
    const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username)
    if(user){
      res.status(409).json({msg:"Username already in use."})
    }else{
      const {id}= await db.one(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`, [username, password])

      res.status(201).json({id, msg:"Signup successful. Now you can log in."})
    }
  }
};

module.exports = mainControllers;
