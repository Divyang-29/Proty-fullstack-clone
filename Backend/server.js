const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// ✅ SESSION MUST COME BEFORE PASSPORT
app.use(
  session({
    secret: "local-auth-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ PASSPORT SETUP
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/properties", require("./routes/property.routes"));
app.use("/api/loan", require("./routes/loan.routes"));
app.use("/api/amenities", require("./routes/amenities.routes"));

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected with Database!");
  } catch (err) {
    console.error("Failed to connect with DB", err.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Proty backend running");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
