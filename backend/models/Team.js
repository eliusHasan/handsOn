const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isPublic: { type: Boolean, default: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  totalHours: { type: Number, default: 0 },
});

module.exports = mongoose.model('Team', teamSchema);