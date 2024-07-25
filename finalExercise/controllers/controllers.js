const users = require("../data/users")

const controllers = {
  home: (req, res) => {
    res.send("working");
  },
  getUsers: (req, res) => {
    res.status(201).json(users);
  },
  getUserById: (req, res)=>{
    const {id} =req.params;
    const selectedUser = users.filter((user)=> (
      Number(id) === user.id
    ))
    res.status(200).json(selectedUser)
  }
};

module.exports = controllers;
