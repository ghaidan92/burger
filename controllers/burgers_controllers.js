var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
  burgers.create([
    'burger_name'
  ], [
    req.body.burger
  ], function(data) {
    res.redirect('/');
  });
});

module.exports = router;