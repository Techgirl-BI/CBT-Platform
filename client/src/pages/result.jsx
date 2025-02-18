import React from 'react';

const Result = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Test Result Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">My Results</h1>
        <div className="space-y-2">
          <p className="text-lg text-gray-600"><strong>Test:</strong> Mathematics</p>
          <p className="text-lg text-gray-600"><strong>Date:</strong> Feb 18, 2025</p>
          <p className="text-lg text-gray-600"><strong>Score:</strong> 85/100 (85%)</p>
          <p className="text-lg font-semibold text-green-600">Pass</p>
        </div>
      </div>

      {/* Performance Breakdown Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Breakdown</h2>
        {/* Placeholder for Chart */}
        <div className="h-64 bg-gray-200 rounded-lg mb-4">
          {/* Insert chart here */}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Review Answers
          </button>
          <button 
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Retake Test
          </button>
          <button 
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Download Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
