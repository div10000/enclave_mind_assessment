"use client";

/**
 * Task 4 – JWT Authentication Demo Page
 *
 * Demonstrates how the frontend calls a protected API
 * using a JWT token stored in localStorage.
 */

import { fetchProtectedData } from "./apiClient";
import { useState } from "react";

export default function JWTAuthDemoPage() {
  const [response, setResponse] = useState<string | null>(null);

  const handleApiCall = async () => {
    try {
      const data = await fetchProtectedData();
      console.log("Protected API response:", data);
      setResponse(JSON.stringify(data, null, 2));
    } catch (error: any) {
      console.error("Error calling protected API", error);
      setResponse(error.message || "Error calling API");
    }
  };

  return (
    <div className="text-black min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Task 4: JWT Authentication Flow
        </h2>

        <p className="mb-6 text-gray-600">
          Click the button below to call a protected backend API<br />
          👉🏻Make sure express server is running !
        </p>

        <button
          onClick={handleApiCall}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Call Protected API
        </button>

        {response && (
          <pre className="mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap break-words">

            {response}
          </pre>
        )}
      </div>
    </div>
  );
}
