// src/pages/HelpRequests.jsx
import React, { useState } from 'react';

const HelpRequests = () => {
  // Sample help requests data
  const [helpRequests, setHelpRequests] = useState([
    {
      id: 1,
      title: 'Winter Clothes Distribution',
      description: 'We need volunteers to distribute winter clothes to homeless people.',
      urgency: 'Urgent',
      comments: [],
    },
    {
      id: 2,
      title: 'Tutoring for Underprivileged Kids',
      description: 'Looking for volunteers to tutor kids in math and science.',
      urgency: 'Medium',
      comments: [],
    },
    {
      id: 3,
      title: 'Community Garden Cleanup',
      description: 'Help us clean and maintain the community garden.',
      urgency: 'Low',
      comments: [],
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    urgency: 'Low',
  });

  const handlePostRequest = (e) => {
    e.preventDefault();
    if (!newRequest.title || !newRequest.description) {
      alert('Please fill in all fields.');
      return;
    }
    const request = {
      id: helpRequests.length + 1,
      title: newRequest.title,
      description: newRequest.description,
      urgency: newRequest.urgency,
      comments: [],
    };
    setHelpRequests([...helpRequests, request]);
    setNewRequest({ title: '', description: '', urgency: 'Low' });
  };

  const handleAddComment = (requestId, comment) => {
    const updatedRequests = helpRequests.map((request) =>
      request.id === requestId
        ? { ...request, comments: [...request.comments, comment] }
        : request
    );
    setHelpRequests(updatedRequests);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Help Requests</h1>

        {/* Post New Help Request Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Post a Help Request</h2>
          <form onSubmit={handlePostRequest}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter a title for your request"
                value={newRequest.title}
                onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your request in detail"
                value={newRequest.description}
                onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="urgency" className="block text-gray-700 text-sm font-bold mb-2">
                Urgency
              </label>
              <select
                id="urgency"
                value={newRequest.urgency}
                onChange={(e) => setNewRequest({ ...newRequest, urgency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Post Request
            </button>
          </form>
        </div>

        {/* Help Requests List */}
        <div className="space-y-6">
          {helpRequests.map((request) => (
            <div key={request.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{request.title}</h2>
              <p className="text-gray-600 mb-4">{request.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">Urgency:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded text-sm font-bold ${
                    request.urgency === 'Urgent'
                      ? 'bg-red-100 text-red-800'
                      : request.urgency === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {request.urgency}
                </span>
              </div>

              {/* Comments Section */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Comments</h3>
                {request.comments.length > 0 ? (
                  request.comments.map((comment, index) => (
                    <div key={index} className="mb-2">
                      <p className="text-gray-700">{comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        handleAddComment(request.id, e.target.value);
                        e.target.value = '';
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpRequests;