/**
 * Enclave Minds Assessment – Backend Entry Point
 *
 * Integrates:
 * Task 2 – Secure API Endpoint
 * Task 4 – JWT Authentication Middleware
 * Task 6 – Global Error Handling (404 + others)
 */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes & middleware
const task2DataRoute = require("./task2_secure_api/data.route");
const authMiddleware = require("./task4_jwt_auth/auth.middleware");
const errorHandler = require("./task6_error_handling/error.middleware");

const app = express();
const PORT = 5000;

// --------------------
// MIDDLEWARE
// --------------------
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());            // Allow frontend calls from any origin

// --------------------
// TASK 2: Secure API Endpoint
// POST /api/data
// --------------------
app.use("/api", task2DataRoute);

// --------------------
// TASK 4: JWT Protected Route Example
// GET /api/protected
// --------------------
app.get("/api/protected", authMiddleware, (req, res) => {
  // Only accessible if middleware passes
  res.json({ message: "Success ! You have access to this protected route!" });
});

// --------------------
// TASK 6: 404 Not Found Handler
// --------------------
app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error); // Pass to global error handler
});

// --------------------
// TASK 6: Global Error Handler
// --------------------
app.use(errorHandler);

// --------------------
// START SERVER
// --------------------
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
