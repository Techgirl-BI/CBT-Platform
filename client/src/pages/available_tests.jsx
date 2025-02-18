import React from 'react';

const Available_tests = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Title and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Available Tests</h1>
          <input 
            type="search" 
            placeholder="Search Tests"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Test List */}
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div className="space-y-2 w-3/4">
              <p className="text-xl font-semibold text-gray-800">Mathematics Final Exams</p>
              <p className="text-gray-600">Duration: 2hrs</p>
              <p className="text-gray-600">Questions: 50</p>
              <p className="text-gray-600">Date: 20 February 2025</p>
            </div>
            <button 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Available_tests;
