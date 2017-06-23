// Import Express and burger.js
// ==================================================
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

// Routes
// ==================================================
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    //console.log(res);
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.b_name, function (result) {
        res.redirect("/");
    });
});

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;