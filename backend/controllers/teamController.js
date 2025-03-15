const Team = require('../models/Team');

// Create a new team
exports.createTeam = async (req, res) => {
  const { name, description, isPublic } = req.body;

  try {
    const team = new Team({ name, description, isPublic });
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all teams
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members', 'name');
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Join a team
exports.joinTeam = async (req, res) => {
  const { teamId } = req.params;
  const { userId } = req.body;

  try {
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    if (team.members.includes(userId)) {
      return res.status(400).json({ message: 'User already in this team' });
    }

    team.members.push(userId);
    await team.save();
    res.json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};