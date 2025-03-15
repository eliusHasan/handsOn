import React from "react";

const ImpactCard = ({ impact }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full md:w-1/3">
      <h3 className="text-xl font-semibold">{impact.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{impact.date}</p>
      <p className="text-gray-700 mt-2">{impact.description}</p>
      <div className="mt-3 text-sm text-blue-500 font-medium">{impact.contributions} Contributions</div>
    </div>
  );
};

const ImpactTracking = () => {
  const impacts = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      description: "Collected 500kg of plastic waste with 50 volunteers.",
      date: "March 5, 2025",
      contributions: 50
    },
    {
      id: 2,
      title: "Tree Plantation Campaign",
      description: "Planted 200 trees across the city parks.",
      date: "March 10, 2025",
      contributions: 30
    },
    {
      id: 3,
      title: "Food Donation Drive",
      description: "Distributed 300 meals to underprivileged families.",
      date: "March 15, 2025",
      contributions: 20
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Your Impact</h1>
      <p className="text-center text-gray-600 mb-6">Track and showcase your contributions to volunteer events.</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {impacts.map(impact => (
          <ImpactCard key={impact.id} impact={impact} />
        ))}
      </div>
    </div>
  );
};

export default ImpactTracking;
