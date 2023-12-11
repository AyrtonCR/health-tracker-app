var express = require("express");
var router = express.Router();

// Get test page
router.get("/food", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
