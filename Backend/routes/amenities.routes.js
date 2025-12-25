const express = require("express");
const router = express.Router();

const amenities = require("../data/amenities");

router.get("/", (req, res) => {
  res.json(amenities);
});

module.exports = router;
