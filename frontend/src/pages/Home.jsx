import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/images/volenteer.jpg';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-950 text-white p-10 rounded-2xl shadow-lg max-w-5xl mx-auto mt-10 mb-10">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Working Together for a Better Tomorrow.
        </h1>
        <p className="text-lg mb-6">
          DoSomething is a platform for young people who care about building a
          better world. Whether you’re just finding your voice or already a
          seasoned doer, we're here to help you take the next step to impact.
          At Hands-On, we believe that real change happens when we unite our efforts for the greater good. Whether it’s supporting those in need, contributing to community projects, or simply offering a helping hand, every small action counts.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={image} // Replace with your image path
          alt="Volunteering"
          className=" md:w-80 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;





















// // src/pages/Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom'; // Add this import
// import MenuBar from '../components/MenuBar';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Include the MenuBar Component */}
//       {/* <MenuBar /> */}

//       {/* Hero Section */}
//       <div className="container mx-auto px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold text-gray-800">
//           Join Hands with Your Community
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Discover meaningful volunteer opportunities and make a difference today.
//         </p>
//         <div className="mt-8">
//           <Link
//             to="/register"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;