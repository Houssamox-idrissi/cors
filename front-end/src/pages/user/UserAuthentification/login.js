import React, { useState } from 'react';
import AuthService from '../services/AuthServices';
import { useNavigate,Link } from 'react-router-dom';
import Footer from '../../../component/footer';
import NavbarClient from '../../../component/navbarClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(email, password)
      .then(response => {
        alert('Login successful!');
        navigate('/client/home');
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <>
    < NavbarClient />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label for="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <p className="px-2 mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/client/register" className="text-sky-600">
            Register
          </Link>
        </p>
        <button type="submit" className="bg-black text-white px-8 py-2 rounded-full mt-4">
          Sign in
        </button>
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    < Footer />
    </>
    
  );
}

export default Login;
