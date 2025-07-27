// index.js
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", require("./routes/userRoutes"));

// Error Handling Middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
