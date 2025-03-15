const express = require('express');
const helpRequestController = require('../controllers/helpRequestController');

const router = express.Router();

router.post('/', helpRequestController.createHelpRequest);
router.get('/', helpRequestController.getHelpRequests);
router.post('/:helpRequestId/comments', helpRequestController.addComment);

module.exports = router;