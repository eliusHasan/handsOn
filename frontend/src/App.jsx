// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Events from './pages/Events';
import HelpRequests from './pages/HelpRequests';
import Teams from './pages/Teams';
import Leaderboard from './pages/Leaderboard';
import ImpactTracking from './pages/ImpactTracking';
import MenuBar from './components/MenuBar';
import CreateEvent from './pages/CreateEvent';
import { EventsProvider } from './context/EventsContext'; // Import the EventsProvider

function App() {
  return (
    <div>
      {/* Wrap the entire application with EventsProvider */}
      <EventsProvider>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/help-requests" element={<HelpRequests />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/impact-tracking" element={<ImpactTracking />} />
        </Routes>
      </EventsProvider>
    </div>
  );
}

export default App;