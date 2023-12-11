var express = require("express");
var router = express.Router();

const foodModel = require("../models/foodModel");

/* GET home page. */

router.get("/", function (req, res, next) {
  const foods = foodModel.find();
  const foodsTestData = [{ Apple: 380 }];

  return res.status(200).json(foodsTestData);
});

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
