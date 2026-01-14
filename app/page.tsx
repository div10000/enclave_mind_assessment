"use client";

/**
 * Enclave Minds Assessment – Main Page
 *
 * Shows UI-based tasks as clickable links.
 * Backend-only tasks are explained (no broken routes).
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 space-y-8">
      
      {/* Submission Info Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Enclave Minds – Technical Assessment
        </h1>

        <div className="text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Submitted by:</span> Divyansh Pandey
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:divyansh.pandey.tech@gmail.com"
              className="text-blue-600 underline"
            >
              divyansh.pandey.tech@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Website / Portfolio:</span>{" "}
            <a
              href="https://divyanshpandey.in"
              target="_blank"
              className="text-blue-600 underline"
            >
              https://divyanshpandey.in
            </a>
          </p>
          <p className="text-sm text-gray-500 pt-2">
            This project contains both frontend demonstrations and backend-only
            implementations as required by the assessment.
          </p>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Assessment Tasks
        </h2>

        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          
          {/* UI Tasks */}
          <li>
            <a
              href="/task1_dynamic_search"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Task 1: Dynamic Search Filter (Frontend – React)
            </a>
          </li>

          <li className="text-gray-500">
            Task 2: Secure API Endpoint (Backend only – Express.js)
          </li>

          <li className="text-gray-500">
            Task 3: Mongoose Schema Design & Sample Query (Database logic)
          </li>

          <li>
            <a
              href="/task4_jwt_auth"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Task 4: JWT Authentication Flow (Frontend + Backend demo)
            </a>
          </li>

          <li>
            <a
              href="/task5_multistep_form"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Task 5: Multi-Step Registration Form (State Management)
            </a>
          </li>

          <li className="text-gray-500">
            Task 6: Global Error Handling Middleware (Backend only)
          </li>

          <li className="text-gray-500">
            Task 7: MongoDB Aggregation Pipeline (Backend logic)
          </li>
        </ol>
      </div>

      <p className="text-sm text-gray-500 italic">
        Note: Backend-only tasks are implemented in code and documented, hence
        no UI routes are provided for them.
      </p>
    </div>
  );
}
