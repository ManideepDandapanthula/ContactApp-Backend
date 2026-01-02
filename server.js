require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ===================== CORS =====================
app.use(cors({
  origin: "https://contact-app-frontend-kklhxunmd-manideeps-projects-40280c46.vercel.app",
  methods: ["GET", "POST", "DELETE"],
}));

// ===================== MIDDLEWARE =====================
app.use(express.json());

// ===================== MONGO CONNECTION =====================
mongoose.connect(process.env.MONGO_URI) // ✅ no extra options needed
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

// ===================== ROUTES =====================
app.use("/api/contacts", contactRoutes);

// ===================== PORT =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
