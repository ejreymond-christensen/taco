var orm = require("../config/orm.js");

var taco = {
  all: function(cb) {
    orm.all("tacos", function(res) {
      // console.log(res);
      cb(res);
    });
  },

  create: function(cols, vals, cb){
    orm.create("tacos", cols, vals, function(res) {
      cb(res);
    });
  }

};

module.exports = taco;
