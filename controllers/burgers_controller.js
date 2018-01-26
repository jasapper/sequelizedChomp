var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
	res.redirect("/burger");
});

router.get("/burger", function(req, res) {
	db.Burger.findAll({
	})
	.then(function(dbBurger) {
	  // updating page
	  var hbsObject = {
		burger: dbBurger
	  };
	  return res.render("index", hbsObject);
	});
  });
  
  router.post("/burger/create", function(req, res) {
	db.Burger.create({
	  burger_name: req.body.burger_name
	})
	.then(function(dbBurger) {
	  res.redirect("/");
	});
  });
  
  router.put("/burger/update/:id", function(req, res) {
	db.Burger.update({
	chomped: true
	}, {
	where: {
		id: req.body.burger_id
	}
	})
	.then(function(dbBurger) {
	res.redirect("/");
	});
	}
  );
  

module.exports = router;