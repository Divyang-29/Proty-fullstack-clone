const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const Property = require("../models/Property");

const IMAGE_URL =
  "https://plus.unsplash.com/premium_vector-1722064362360-51c7cadc6871?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const properties = [
  {
    title: "Luxury Family Villa",
    type: "sale",
    price: 450000,
    size: 950,
    beds: 3,
    baths: 3,
    rooms: 6,
    province: "California",
    amenities: ["Fireplace", "Dishwasher", "Microwave", "Refrigerator"],
    images: [IMAGE_URL],
  },
  {
    title: "Modern City Apartment",
    type: "rent",
    price: 2200,
    size: 600,
    beds: 2,
    baths: 1,
    rooms: 3,
    province: "New York",
    amenities: ["Carbon alarm", "Security cameras", "Hangers"],
    images: [IMAGE_URL],
  },
  {
    title: "Beachside Bungalow",
    type: "sale",
    price: 520000,
    size: 1100,
    beds: 4,
    baths: 3,
    rooms: 7,
    province: "Florida",
    amenities: ["Fireplace", "Coffee maker", "Smoke alarm"],
    images: [IMAGE_URL],
  },
  {
    title: "Affordable Studio Flat",
    type: "rent",
    price: 1200,
    size: 350,
    beds: 1,
    baths: 1,
    rooms: 1,
    province: "Texas",
    amenities: ["Microwave", "Iron"],
    images: [IMAGE_URL],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Property.deleteMany();
    await Property.insertMany(properties);
    console.log("Dummy properties with images inserted successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
