var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateBurger: function (objColVals, condition, cb) {
        orm.updateBurger('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burgers;