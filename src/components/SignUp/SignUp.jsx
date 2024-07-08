
import React from 'react';

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form action='/login'>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input className="w-full px-3 py-2 border rounded" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input className="w-full px-3 py-2 border rounded" type="password" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
