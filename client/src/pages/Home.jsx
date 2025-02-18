import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CBT System</h1>
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li>
              <button onClick={() => navigate("/login")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Login
              </button >
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Welcome to the <span className="text-blue-600">CBT System</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your trusted platform for seamless online examinations.
        </p>
        <button onClick={() => navigate("/login")} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md text-center p-4 mt-6">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} CBT System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home
