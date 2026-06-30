const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Verify environment variables
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://praveenuportfolio.netlify.app/",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api/contact", contactRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Praveen Portfolio Backend is Running...");
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is Working Successfully!"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});