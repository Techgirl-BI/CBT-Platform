import React from 'react';

const Testinterface = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Test Interface Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">Test Interface</h1>
      </div>

      {/* Question Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Question 1 of 10</h2>
        <p className="text-lg text-gray-700 mb-4">What is the capital of France?</p>

        <ul className="space-y-2">
          <li className="flex items-center space-x-3">
            <input type="radio" id="berlin" name="answer" className="text-blue-600" />
            <label htmlFor="berlin" className="text-gray-600">Berlin</label>
          </li>
          <li className="flex items-center space-x-3">
            <input type="radio" id="madrid" name="answer" className="text-blue-600" />
            <label htmlFor="madrid" className="text-gray-600">Madrid</label>
          </li>
          <li className="flex items-center space-x-3">
            <input type="radio" id="paris" name="answer" className="text-blue-600" />
            <label htmlFor="paris" className="text-gray-600">Paris</label>
          </li>
          <li className="flex items-center space-x-3">
            <input type="radio" id="rome" name="answer" className="text-blue-600" />
            <label htmlFor="rome" className="text-gray-600">Rome</label>
          </li>
        </ul>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Previous
          </button>
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testinterface;
