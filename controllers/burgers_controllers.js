const express = require("express");
const app = express();
const db = require("../models");


//Import burgers.js file
// const Burger = require("./models/burger.js");

const FindAll = (req, res) => {
  db.Burger.findAll({}).then(data => {
    const burgerData = {burgers : data}
    res.render("index", burgerData );
  });
}

const Create = (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(data => {
    res.redirect("/index");
  });
}

const Update = (req,res) => {
  db.Burger.update({
    where: {
      burger_name: req.body.burger_name
    },
    devoured: true
  }).then(data =>{
    res.redirect("/index")
  })
}


module.exports = {
  FindAll: FindAll,
  Create: Create,
  Update: Update
};
