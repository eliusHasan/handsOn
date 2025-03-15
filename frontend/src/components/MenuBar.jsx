// src/components/MenuBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Text Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HandsOn
        </Link>

        {/* Main Menu */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-600">
            Events
          </Link>
          <Link to="/help-requests" className="text-gray-700 hover:text-blue-600">
            Help Request
          </Link>
          <Link to="/teams" className="text-gray-700 hover:text-blue-600">
            Teams
          </Link>
          <Link to="/leaderboard" className="text-gray-700 hover:text-blue-600">
            Leaderboard
          </Link>
          <Link to="/impact-tracking" className="text-gray-700 hover:text-blue-600">
            Impact Tracking
          </Link>
        </div>

        {/* Sign Up/Sign In Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded border border-blue-600 hover:bg-blue-50"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;