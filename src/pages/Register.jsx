import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    state: "",
    college: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="state">
            State
          </label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="college">
            College Name
          </label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="college"
            name="college"
            value={form.college}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="userId">
            User ID
          </label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="userId"
            name="userId"
            value={form.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold shadow w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;