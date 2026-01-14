/**
 * Task 6 – Global Error Handling Middleware
 *
 * Catches all errors in the Express server and sends
 * structured JSON responses to the client.
 */

module.exports = (err, req, res, next) => {
  // Determine status code
  const statusCode = err.status || 500;

  // Respond with structured JSON
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
};
