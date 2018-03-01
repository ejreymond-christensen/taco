var orm = require("../config/orm.js");

var taco = {
  all: function(cb) {
    orm.all("tacos", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb){
    orm.create("tacos", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(data, condition, cb){
    orm.update("tacos", data, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = taco;
