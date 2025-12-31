const express = require("express");
const Property = require("../models/Property");
const { upload } = require("../middlewares/upload");

const router = express.Router();

// 🔐 AUTH MIDDLEWARE
const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ message: "Unauthorized" });
};

/**
 * CREATE PROPERTY (ONLY LOGGED-IN USER)
 */
router.post("/", ensureAuth, upload.array("images", 10), async (req, res) => {
  try {
    const imageUrls = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    let floors = [];
    if (req.body.floors) {
      try {
        floors = JSON.parse(req.body.floors);
      } catch (e) {
        console.log("Floor JSON error:", e);
      }
    }

    const property = new Property({
      ...req.body,
      images: imageUrls,
      floors,
      createdBy: req.user._id, // 🔥 CRITICAL
    });

    await property.save();

    res.status(201).json({
      success: true,
      message: "Property added successfully",
      property,
    });
  } catch (error) {
    console.error("PROPERTY ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET ALL PROPERTIES (PUBLIC)
 */
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * DELETE PROPERTY (ONLY OWNER)
 */
router.delete("/:id", ensureAuth, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // 🔥 OWNERSHIP CHECK
    if (property.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You are not allowed to delete this property" });
    }

    await property.deleteOne();

    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("DELETE PROPERTY ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { propertyType, propertyStatus, minPrice, maxPrice, bedrooms } =
      req.query;

    const query = {};

    if (propertyType) query.propertyType = propertyType;
    if (propertyStatus) query.propertyStatus = propertyStatus;
    if (bedrooms) query.bedrooms = Number(bedrooms);

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const properties = await Property.find(query).sort({ createdAt: -1 });

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
