// src/pages/Teams.jsx
import React, { useState } from 'react';

const Teams = () => {
  // Sample teams data
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Team Green Warriors',
      description: 'A team dedicated to environmental conservation and tree planting.',
      isPublic: true,
      members: ['Alice', 'Bob'],
    },
    {
      id: 2,
      name: 'Team EduCare',
      description: 'Volunteers working to provide education to underprivileged children.',
      isPublic: false,
      members: ['Charlie'],
    },
    {
      id: 3,
      name: 'Team Health Heroes',
      description: 'A group focused on healthcare initiatives and medical camps.',
      isPublic: true,
      members: ['Diana', 'Eve'],
    },
  ]);

  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    isPublic: true,
  });

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (!newTeam.name || !newTeam.description) {
      alert('Please fill in all fields.');
      return;
    }
    const team = {
      id: teams.length + 1,
      name: newTeam.name,
      description: newTeam.description,
      isPublic: newTeam.isPublic,
      members: [],
    };
    setTeams([...teams, team]);
    setNewTeam({ name: '', description: '', isPublic: true });
  };

  const handleJoinTeam = (teamId) => {
    const team = teams.find((t) => t.id === teamId);
    if (team.isPublic) {
      alert(`You have joined ${team.name}!`);
    } else {
      alert(`Request sent to join ${team.name}.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Teams</h1>

        {/* Create New Team Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Create a New Team</h2>
          <form onSubmit={handleCreateTeam}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Team Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your team name"
                value={newTeam.name}
                onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your team's mission and goals"
                value={newTeam.description}
                onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="isPublic" className="block text-gray-700 text-sm font-bold mb-2">
                Team Type
              </label>
              <select
                id="isPublic"
                value={newTeam.isPublic}
                onChange={(e) => setNewTeam({ ...newTeam, isPublic: e.target.value === 'true' })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value={true}>Public (Anyone can join)</option>
                <option value={false}>Private (Invite-only)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Create Team
            </button>
          </form>
        </div>

        {/* Teams List */}
        <div className="space-y-6">
          {teams.map((team) => (
            <div key={team.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{team.name}</h2>
              <p className="text-gray-600 mb-4">{team.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">Team Type:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded text-sm font-bold ${
                    team.isPublic ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {team.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">Members:</span>
                <span className="ml-2 text-gray-700">
                  {team.members.length > 0 ? team.members.join(', ') : 'No members yet.'}
                </span>
              </div>
              <button
                onClick={() => handleJoinTeam(team.id)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {team.isPublic ? 'Join Team' : 'Request to Join'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;