const Property = require("../models/Property");

// 🔍 SEARCH (PUBLIC)
exports.searchProperties = async (req, res) => {
  try {
    const {
      type,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      beds,
      baths,
      amenities,
    } = req.query;

    let query = {};

    if (type) query.type = type;
    if (beds) query.beds = beds;
    if (baths) query.baths = baths;

    if (minPrice || maxPrice) {
      query.price = {
        $gte: minPrice || 0,
        $lte: maxPrice || Infinity,
      };
    }

    if (minSize || maxSize) {
      query.size = {
        $gte: minSize || 0,
        $lte: maxSize || Infinity,
      };
    }

    if (amenities) {
      query.amenities = { $all: amenities.split(",") };
    }

    const properties = await Property.find(query);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

// ➕ CREATE (ADMIN)
exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json({
      success: true,
      message: "Property created successfully",
      data: property,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✏️ UPDATE (ADMIN)
exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({
      success: true,
      message: "Property updated successfully",
      data: property,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ❌ DELETE (ADMIN)
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
