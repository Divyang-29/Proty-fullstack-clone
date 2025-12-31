const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = 8080;

// 🔥 CORS FIX
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// 🔥 SESSION (BEFORE PASSPORT)
app.use(
  session({
    secret: "local-auth-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// PASSPORT CONFIG
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

// ROUTES (YOU ALREADY HAVE THEM)
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/loan", require("./routes/loan.routes"));
app.use("/api/amenities", require("./routes/amenities.routes"));
app.use("/uploads", express.static("uploads"));
app.use("/api/properties", require("./routes/property.routes.js"));


// DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected with Database!"))
  .catch((err) => console.error(err.message));

app.get("/", (req, res) => {
  res.send("Proty backend running");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
