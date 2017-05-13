const controller = require("../controllers/burgers_controllers");
const express = require("express");
const router = express.Router()

module.exports = router
  .get('/index', controller.FindAll)
  .post('/index', controller.Create)
  .post('/', controller.Update)
