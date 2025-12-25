const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ["sale", "rent"] },
  price: Number,
  size: Number,
  beds: Number,
  baths: Number,
  rooms: Number,
  province: String,
  amenities: [String],
  images: [String],
});

module.exports = mongoose.model("Property", propertySchema);
