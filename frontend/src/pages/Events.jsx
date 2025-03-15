import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Community Cleanup',
    description: 'Join us to clean up the local park and make our community greener.',
    date: '2023-11-15',
    time: '10:00 AM',
    location: 'Central Park, New York',
    category: 'Environmental',
    availability: 'Open'
  },
  {
    id: 2,
    title: 'Food Drive for the Homeless',
    description: 'Help us collect and distribute food to those in need.',
    date: '2023-11-20',
    time: '9:00 AM',
    location: 'City Shelter, Los Angeles',
    category: 'Healthcare',
    availability: 'Full'
  },
  {
    id: 3,
    title: 'Tutoring for Kids',
    description: 'Volunteer to tutor children in math and reading.',
    date: '2023-11-25',
    time: '3:00 PM',
    location: 'Local Community Center, Chicago',
    category: 'Education',
    availability: 'Open'
  },
]

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Upcoming Events</h1>
        <Link to="/createEvent">
          <button className="bg-green-600 text-white px-4 py-2 rounded mb-6 hover:bg-green-700">
            Create New Event
          </button>
        </Link>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* ... rest of event display code ... */}
              </div>
              <button
                className={`w-full py-2 px-4 rounded text-white ${event.availability === 'Full' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-600'}`}
                disabled={event.availability === 'Full'}
              >
                {event.availability === 'Full' ? 'Full' : 'Join Event'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;