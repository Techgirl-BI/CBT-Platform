import React from 'react';

const Testinstructions = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Test Instructions</h1>

        {/* Instructions */}
        <p className="text-lg text-gray-700 mb-4">
          Please read the following instructions carefully before starting the test:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Ensure</strong> you have a stable internet connection.</li>
          <li><strong>Read</strong> each question carefully before selecting an answer.</li>
          <li><strong>You cannot</strong> go back to previous questions once answered.</li>
          <li><strong>The test is timed,</strong> and the remaining time will be displayed at the top.</li>
          <li><strong>Do not</strong> refresh or close the browser during the test.</li>
          <li><strong>Click</strong> the "Submit" button when you have completed all questions.</li>
        </ul>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Proceed to Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testinstructions;
