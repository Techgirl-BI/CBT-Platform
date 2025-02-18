import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const Login = () => {
const [regNumber, setRegNumber] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();

const handleLogin = (e)=> {
    e.preventDefault();
    navigate("/dashboard");
}
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full h-110 max-w-lg p-10 bg-white shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input 
              type="text" 
              value={regNumber}
              required
              onChange={(e) => setRegNumber(e.target.value)}
              placeholder="Registration Number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
