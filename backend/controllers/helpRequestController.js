const HelpRequest = require('../models/HelpRequest');

// Create a new help request
exports.createHelpRequest = async (req, res) => {
  const { title, description, urgency, createdBy } = req.body;

  try {
    const helpRequest = new HelpRequest({ title, description, urgency, createdBy });
    await helpRequest.save();
    res.status(201).json(helpRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all help requests
exports.getHelpRequests = async (req, res) => {
  try {
    const helpRequests = await HelpRequest.find().populate('createdBy', 'name');
    res.json(helpRequests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a comment to a help request
exports.addComment = async (req, res) => {
  const { helpRequestId } = req.params;
  const { comment } = req.body;

  try {
    const helpRequest = await HelpRequest.findById(helpRequestId);
    if (!helpRequest) {
      return res.status(404).json({ message: 'Help request not found' });
    }

    helpRequest.comments.push(comment);
    await helpRequest.save();
    res.json(helpRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};