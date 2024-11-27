import React from "react";

const LoginPage = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-4">Login Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-primary text-white rounded hover:bg-secondary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
