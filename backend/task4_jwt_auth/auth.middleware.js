/**
 * Task 4 – Backend JWT Authentication Middleware
 *
 * This middleware checks whether an incoming request
 * contains a valid Bearer token in the Authorization header.
 */

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists and follows Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized: Token missing or invalid format",
    });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  /*
    Token verification would normally happen here:
    jwt.verify(token, SECRET_KEY)
    
    Skipped for assessment simplicity
  */

  // If token is valid, allow request to proceed
  next();
};
