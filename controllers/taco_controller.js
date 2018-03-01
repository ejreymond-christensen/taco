var express = require("express");

var router = express.Router();

var taco = require("../models/taco.js");

router.get("/", function(req, res) {
  taco.all(function(data) {
    var tacoObject = {
      tacos: data
    };

    console.log("Controller Sent to HB");
    res.render("index", {taco: tacoObject});
  });
});

module.exports = router;
