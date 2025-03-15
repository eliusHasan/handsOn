const User = require('../models/User');
const Team = require('../models/Team');

// Get top volunteers
exports.getTopVolunteers = async (req, res) => {
  try {
    const topVolunteers = await User.find()
      .sort({ volunteerHours: -1 })
      .limit(10)
      .select('name volunteerHours points');
    res.json(topVolunteers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get top teams
exports.getTopTeams = async (req, res) => {
  try {
    const topTeams = await Team.find()
      .sort({ totalHours: -1 })
      .limit(10)
      .select('name members totalHours');
    res.json(topTeams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};