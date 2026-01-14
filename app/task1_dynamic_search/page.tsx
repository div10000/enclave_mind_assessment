"use client";

import { useEffect, useState } from "react";

/**
 * Task 1 – Dynamic Search Filter
 *
 * Fetches users from JSONPlaceholder API
 * Allows real-time filtering by name or email
 * Includes loading state
 */

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Task1Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-black min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Task 1: Dynamic Search Filter
      </h2>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Users List */}
      {!loading && (
        <ul className="w-full max-w-md space-y-4">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="bg-white p-4 rounded-md shadow hover:bg-blue-50 transition"
            >
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}

          {filteredUsers.length === 0 && (
            <li className="text-center text-gray-500">No users found</li>
          )}
        </ul>
      )}
    </div>
  );
}
