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

router.post('/api/burgers', function (req, res) {
    burgers.create([
        'burger_name'
    ], [
            req.body.burger.burger_name
        ], function (data) {
            res.redirect('/');
        });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log(condition);

    burgers.updateBurger({
        devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});

module.exports = router;