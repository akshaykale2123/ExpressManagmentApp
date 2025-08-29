const express = require("express");
const cors = require("cors"); // ← add this
const userRoutes = require("./routes/routes");
const errorHandler = require("./middlewares/middleware");

const app = express();

// Enable CORS for your frontend
app.use(cors({
    origin: "http://localhost:3000", // ← your React dev URL
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
