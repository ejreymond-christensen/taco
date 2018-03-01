var express = require("express");
var router = express.Router();
var taco = require("../models/taco.js");

//Router for a GET request to display the tacos.
router.get("/", function(req, res) {
  taco.all(function(data) {
    var tacoObject = {
      taco: data
    };
    res.render("index", {taco: data});
  });
});

//Router for a POST request to add a taco.
router.post("/api/tacos", function(req, res) {
  taco.create([
    "taco_name", "devoured"
  ], [
    req.body.taco_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new taco
    res.json({ id: result.insertId });
  });
});

//Router for a PUT request to update the devoured boolean.
router.put("/api/tacos/:id", function(req, res){
  var condition = "id = "+ req.params.id;

  taco.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
