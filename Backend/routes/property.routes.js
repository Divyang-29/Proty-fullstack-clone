const express = require("express");
const router = express.Router();

const {
  searchProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/property.controller");

const isAdmin = require("../middlewares/isAdmin");

// PUBLIC
router.get("/search", searchProperties);

// ADMIN ONLY
router.post("/", isAdmin, createProperty);
router.put("/:id", isAdmin, updateProperty);
router.delete("/:id", isAdmin, deleteProperty);

module.exports = router;
