/**
 * Task 4 – Frontend JWT Token Attachment
 *
 * This file demonstrates how a frontend application
 * sends a JWT token to a protected backend route.
 */

export async function fetchProtectedData() {
  // Token is assumed to be stored in localStorage after login
  const token = localStorage.getItem("token");

  // Call to protected backend API
  const response = await fetch("http://localhost:5000/api/protected", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      // JWT token is attached using Bearer scheme
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}
