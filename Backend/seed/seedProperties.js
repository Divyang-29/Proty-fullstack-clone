const path = require("path");
const mongoose = require("mongoose");

// ✅ Load .env correctly from Backend root
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// ✅ Import Property model
const Property = require("../models/Property");

const seedData = async () => {
  try {
    // ✅ Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");

    // (Optional) clear old data
    await Property.deleteMany();

    // ✅ Insert test data
    await Property.insertMany([
      {
        title: "Luxury Family Villa",
        type: "sale",
        price: 15000,
        size: 120,
        beds: 3,
        baths: 2,
        rooms: 5,
        province: "California",
        amenities: ["Carbon alarm", "Fireplace", "Microwave"],
        images: [],
      },
      {
        title: "Modern Apartment",
        type: "rent",
        price: 8000,
        size: 80,
        beds: 2,
        baths: 1,
        rooms: 3,
        province: "New York",
        amenities: ["Dishwasher", "Refrigerator"],
        images: [],
      },
      {
        title: "Premium Penthouse",
        type: "sale",
        price: 25000,
        size: 200,
        beds: 4,
        baths: 3,
        rooms: 6,
        province: "California",
        amenities: ["Carbon alarm", "Security cameras"],
        images: [],
      },
    ]);

    console.log("✅ Properties seeded successfully");

    // ✅ Close DB connection properly
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedData();
