'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex h-[86vh] w-[1000px] ml-[400px] bg-blue-900 ">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url('/your-image-path.jpg')` }}
      >
        <div className="sign-in absolute inset-0"></div>
        <div className="z-10 flex flex-col items-center justify-center text-white w-full p-8">
          <Image src="/sign-in-logo.svg" width={102} height={113} alt="logo" />
          <h1 className="text-4xl font-bold mb-4">WELCOME</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:w-1/2 w-full px-8 py-12text-white">
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
