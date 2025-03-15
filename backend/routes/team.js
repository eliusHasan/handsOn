const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

router.post('/', teamController.createTeam);
router.get('/', teamController.getTeams);
router.post('/:teamId/join', teamController.joinTeam);

module.exports = router;