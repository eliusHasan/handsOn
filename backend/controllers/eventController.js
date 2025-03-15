const Event = require('../models/Event');

// Create a new event
exports.createEvent = async (req, res) => {
  const { title, description, date, location, category } = req.body;

  try {
    const event = new Event({ title, description, date, location, category });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees', 'name');
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Join an event
exports.joinEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userId } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.attendees.includes(userId)) {
      return res.status(400).json({ message: 'User already joined this event' });
    }

    event.attendees.push(userId);
    await event.save();
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};