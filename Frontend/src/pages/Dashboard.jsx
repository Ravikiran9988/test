import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">Your Skincare Dashboard</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Analysis History Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis History</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">June 15, 2023</span>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">May 28, 2023</span>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
            
            {/* Current Routine Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Routine</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">Morning: Hydrating Cleanser</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">Evening: Retinol Serum</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-purple-100 text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-200 transition">
                Edit Routine
              </button>
            </div>
            
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
              <div className="h-40 flex items-center justify-center text-gray-400">
                <p>Progress chart will appear here</p>
              </div>
            </div>
          </div>
          
          {/* Recommended Products */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended For You</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="bg-gray-100 h-32 mb-3 rounded-lg"></div>
                  <h3 className="font-medium text-gray-800">Product {item}</h3>
                  <p className="text-sm text-gray-500 mb-2">For dry/acne-prone skin</p>
                  <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;