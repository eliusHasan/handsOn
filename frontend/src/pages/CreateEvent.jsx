import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsContext } from '../context/EventsContext';

const CreateEvent = () => {
  const { events, setEvents } = useContext(EventsContext);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    availability: 'Open'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.description && newEvent.date && newEvent.time && newEvent.location && newEvent.category) {
      const eventWithId = { ...newEvent, id: events.length + 1 };
      setEvents([...events, eventWithId]);
      navigate('/events');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Create New Event</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="time" name="time" value={newEvent.time} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="category" placeholder="Category" value={newEvent.category} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <button onClick={handleCreateEvent} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;