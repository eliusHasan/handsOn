import React, { createContext, useState } from 'react';

// Create a context for events
export const EventsContext = createContext();

// Create a provider component
export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([
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
  ]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};