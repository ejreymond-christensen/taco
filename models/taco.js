var orm = require("../config/orm.js");

var taco = {
  all: function(cb) {
    orm.all("tacos", function(res) {
      console.log("Taco sent" + res);
      cb(res);
    });
  },

};

module.exports = taco;
