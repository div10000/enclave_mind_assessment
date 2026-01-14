"use client";

/**
 * Enclave Minds Assessment – Main Page
 *
 * Landing page linking to all tasks
 * Styled with Tailwind CSS
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Enclave Minds Assessment
      </h1>
      <p className="mb-8 text-gray-600">
        Welcome! Click any task below to view or test it:
      </p>

      <ol className="space-y-4 w-full max-w-md">
        <li>
          <a
            href="/task1_dynamic_search"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 1: Dynamic Search Filter (Frontend React)
          </a>
        </li>
        <li>
          <a
            href="/task2_secure_api"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 2: Secure API Endpoint (Backend Node.js)
          </a>
        </li>
        <li>
          <a
            href="/task3_schema_design"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 3: Mongoose Schema Design (Database)
          </a>
        </li>
        <li>
          <a
            href="/task4_jwt_auth"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 4: JWT Authentication Flow (Full-Stack)
          </a>
        </li>
        <li>
          <a
            href="/task5_multistep_form"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 5: Multi-Step Registration Form (Frontend State)
          </a>
        </li>
        <li>
          <a
            href="/task6_error_handling"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 6: Error Handling & Logging (Backend)
          </a>
        </li>
        <li>
          <a
            href="/task7_aggregation"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Task 7: Data Aggregation (MERN)
          </a>
        </li>
      </ol>

      <p className="mt-12 text-gray-500 italic">
        Click any task to view or test it.
      </p>
    </div>
  );
}
