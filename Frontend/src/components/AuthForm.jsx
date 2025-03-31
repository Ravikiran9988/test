import React from 'react';

const AuthForm = ({ isLogin = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <span className="bg-purple-100 text-purple-800 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </span>
          <h1 className="text-2xl font-bold text-gray-800">Radiant Skincare</h1>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">
          {isLogin ? 'Welcome back!' : 'Create your account'}
        </h2>
        <p className="text-center text-gray-500 mb-8">
          {isLogin ? (
            <>Don't have an account? <a href="#" className="text-purple-600 hover:underline">Register</a></>
          ) : (
            <>Already have an account? <a href="#" className="text-purple-600 hover:underline">Login</a></>
          )}
        </p>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
          )}
          
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {isLogin && (
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>
          )}

          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition mt-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;