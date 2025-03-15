const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: { type: [String], default: [] },
  causes: { type: [String], default: [] },
  volunteerHours: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);