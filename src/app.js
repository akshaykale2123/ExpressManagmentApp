const express = require("express");
const userRoutes = require("./routes/routes");
const errorHandler = require("./middlewares/middleware");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);

module.exports = app;
