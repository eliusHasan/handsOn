const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');

const router = express.Router();

router.get('/volunteers', leaderboardController.getTopVolunteers);
router.get('/teams', leaderboardController.getTopTeams);

module.exports = router;