const mongoose = require("mongoose");

const floorSchema = new mongoose.Schema({
  name: String,
  price: Number,
  pricePostfix: String,
  size: Number,
  sizePostfix: String,
  bedrooms: Number,
  bathrooms: Number,
  description: String,
  image: String,
});

const propertySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    address: String,
    zipCode: String,
    country: String,
    state: String,
    neighborhood: String,
    location: String,

    price: Number,
    unitPrice: String,
    beforePriceLabel: String,
    afterPriceLabel: String,

    propertyType: String,
    propertyStatus: String,
    propertyLabel: String,
    size: Number,
    landArea: Number,
    propertyId: String,

    rooms: Number,
    bedrooms: Number,
    bathrooms: Number,
    garages: Number,
    garageSize: Number,
    yearBuilt: Number,

    images: [String],
    floors: [floorSchema],

    agentType: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
