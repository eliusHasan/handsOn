// src/pages/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [skills, setSkills] = useState(['Teaching', 'Public Speaking']);
  const [causes, setCauses] = useState(['Education', 'Environment']);

  const handleSave = () => {
    // Add logic to save the updated profile (e.g., API call)
    setIsEditing(false);
    console.log('Profile saved:', { name, email, skills, causes });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Profile</h1>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-900">{name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-900">{email}</p>
          )}
        </div>

        {/* Skills Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
          {isEditing ? (
            <input
              type="text"
              value={skills.join(', ')}
              onChange={(e) => setSkills(e.target.value.split(', '))}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter skills separated by commas"
            />
          ) : (
            <p className="text-gray-900">{skills.join(', ')}</p>
          )}
        </div>

        {/* Causes Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Causes</label>
          {isEditing ? (
            <input
              type="text"
              value={causes.join(', ')}
              onChange={(e) => setCauses(e.target.value.split(', '))}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter causes separated by commas"
            />
          ) : (
            <p className="text-gray-900">{causes.join(', ')}</p>
          )}
        </div>

        {/* Edit/Save Button */}
        <div className="flex justify-end">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;