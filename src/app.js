const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/routes");
const errorHandler = require("./middlewares/middleware");

const app = express();

// ✅ Enable CORS for all origins temporarily (for testing)
// app.use(cors());

// OR, for only your React dev frontend:
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
