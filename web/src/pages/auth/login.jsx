import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <div>
          <img className="w-auto h-20 mx-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to Control Panel
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary-600 group hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {/* Heroicon name: solid/lock-closed */}
              <svg
                className="w-4 h-4 mr-2 -ml-1 text-primary-300 group-hover:text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-gray-600">
          Forgot your password?
          <Link to="/reset-password" className="ml-1 font-medium text-primary-600 hover:text-primary-500">
            Reset here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
