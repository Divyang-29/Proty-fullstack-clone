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

    // 🔹 TYPE (sale / rent)
    if (type) {
      query.type = type;
    }

    // 🔹 BEDS & BATHS (convert to number)
    if (beds) {
      query.beds = Number(beds);
    }

    if (baths) {
      query.baths = Number(baths);
    }

    // 🔹 PRICE RANGE
    if (minPrice || maxPrice) {
      query.price = {
        $gte: minPrice ? Number(minPrice) : 0,
        $lte: maxPrice ? Number(maxPrice) : Number.MAX_SAFE_INTEGER,
      };
    }

    // 🔹 SIZE RANGE
    if (minSize || maxSize) {
      query.size = {
        $gte: minSize ? Number(minSize) : 0,
        $lte: maxSize ? Number(maxSize) : Number.MAX_SAFE_INTEGER,
      };
    }

    // 🔹 AMENITIES (handle +, spaces, commas safely)
    if (amenities) {
      const amenitiesArray = amenities
        .split(",")
        .map((item) => decodeURIComponent(item).replace(/\+/g, " ").trim());

      query.amenities = { $all: amenitiesArray };
    }

    // 🔹 DEBUG (optional – remove later)
    console.log("Search Query:", query);

    const properties = await Property.find(query);
    res.status(200).json(properties);
    console.log("🔎 MongoDB Query Object:", JSON.stringify(query, null, 2));
  } catch (err) {
    console.error("❌ SEARCH ERROR:", err);
    res.status(500).json({
      error: "Search failed",
      message: err.message,
    });
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
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

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
