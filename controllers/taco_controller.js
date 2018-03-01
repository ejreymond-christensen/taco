var express = require("express");

var router = express.Router();

var taco = require("../models/taco.js");

router.get("/", function(req, res) {
  taco.all(function(data) {
    var tacoObject = {
      taco: data
    };

    console.log(data);
    res.render("index", {taco: data});
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create([
    "taco_name", "devoured"
  ], [
    req.body.taco_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;
