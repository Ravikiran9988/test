import React from 'react';

const SkinAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Skin Analysis
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Text Analysis Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Analyze via Text
            </h2>
            <p className="text-gray-600 mb-4">
              Describe your skin condition for personalized recommendations
            </p>
            
            <textarea 
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter details about your skin..."
              rows="4"
            />
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition">
              Analyze
            </button>
          </div>

          {/* Image Analysis Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Analyze via Image
            </h2>
            <p className="text-gray-600 mb-4">
              Upload a photo for AI-powered skin assessment
            </p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 cursor-pointer hover:bg-gray-50 transition">
              <input type="file" id="skin-upload" className="hidden" />
              <label htmlFor="skin-upload" className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-gray-500">Click to upload</span>
                <span className="text-gray-400 text-sm">or drag and drop</span>
              </label>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
              Upload & Analyze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysis;