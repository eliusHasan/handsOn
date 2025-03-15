// src/pages/Leaderboard.jsx
import React from 'react';

const Leaderboard = () => {
  // Sample data for top volunteers and teams
  const topVolunteers = [
    { id: 1, name: 'Alice Smith', hours: 120, points: 600 },
    { id: 2, name: 'Bob Johnson', hours: 95, points: 475 },
    { id: 3, name: 'Charlie Brown', hours: 80, points: 400 },
    { id: 4, name: 'Diana Miller', hours: 75, points: 375 },
    { id: 5, name: 'Eve Wilson', hours: 60, points: 300 },
  ];

  const topTeams = [
    { id: 1, name: 'Green Warriors', members: 15, hours: 450 },
    { id: 2, name: 'Health Heroes', members: 12, hours: 380 },
    { id: 3, name: 'EduCare', members: 10, hours: 320 },
    { id: 4, name: 'Tech Tutors', members: 8, hours: 250 },
    { id: 5, name: 'Food Savers', members: 5, hours: 180 },
  ];

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-400 text-black'; // Gold
      case 2:
        return 'bg-gray-300 text-black'; // Silver
      case 3:
        return 'bg-amber-700 text-white'; // Bronze
      default:
        return 'bg-gray-100 text-gray-800'; // Default
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Leaderboard</h1>

        {/* Top Volunteers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Volunteers</h2>
            <div className="space-y-4">
              {topVolunteers.map((volunteer, index) => (
                <div
                  key={volunteer.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${getRankBadge(index + 1)}`}
                    >
                      #{index + 1}
                    </span>
                    <span className="font-medium">{volunteer.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{volunteer.hours} hours</p>
                    <p className="text-sm text-blue-600">{volunteer.points} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Teams Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Teams</h2>
            <div className="space-y-4">
              {topTeams.map((team, index) => (
                <div
                  key={team.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${getRankBadge(index + 1)}`}
                    >
                      #{index + 1}
                    </span>
                    <span className="font-medium">{team.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{team.members} members</p>
                    <p className="text-sm text-blue-600">{team.hours} hours</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;