import React from 'react';

const Profile = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">My Profile</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h2>
        <p className="text-lg text-gray-600 mb-2">johndoe@example.com</p>
        <p className="text-lg text-gray-600">Joined: January 10, 2024</p>
      </div>

      {/* Account Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Account Details</h1>
        <p className="text-lg text-gray-600 mb-2"><strong>Username:</strong> JohnDoe</p>
        <p className="text-lg text-gray-600 mb-2"><strong>Role:</strong> Student</p>
        <p className="text-lg text-gray-600"><strong>Completed Tests:</strong> 5</p>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Edit Profile
        </button>
        <button 
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
