import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6 space-y-6 flex-shrink-0 flex flex-col">
        <h1 className="text-3xl font-extrabold text-center">CBT System</h1>
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <Link to="available_tests" className="text-lg hover:text-blue-300 cursor-pointer">Available Tests</Link>
        <Link to="result" className="text-lg hover:text-blue-300 cursor-pointer">My Results</Link>
        <Link to="profile" className="text-lg hover:text-blue-300 cursor-pointer">Profile</Link>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold text-gray-800">Welcome, John Doe</p>
        </div>

        {/* Stats section */}
        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Total Tests Available</p>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Total Tests Completed</p>
            <p className="text-3xl font-bold text-blue-600">8</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Average Score</p>
            <p className="text-3xl font-bold text-blue-600">85%</p>
          </div>
        </div>

        {/* Render Only Active Tab's Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Outlet /> {/* This will render the content based on the active route */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
