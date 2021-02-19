import React from 'react'
import logo from '../assets/img/logo.svg'
import UserDropdown  from './user-dropdown';
import { authenticationService } from '../services'
import { history } from '../utils';

const logout = () => {
  authenticationService.logout()
  history.push('/login')
}

export default function NavigationDesktop() {
  return (
  <div className="hidden lg:flex lg:flex-shrink-0">
    <div className="flex flex-col w-64 pt-5 pb-4 bg-gray-100 border-r border-gray-200">
      <div className="flex items-center flex-shrink-0 px-6">
        <img className="w-auto h-8" src={logo} alt="logo" />
      </div>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-1 h-0 overflow-y-auto">
        {/* User account dropdown */}
        <UserDropdown open={open} logout={logout}  />
        {/* Sidebar Search */}
        {/* Navigation */}
        <nav className="px-3 mt-6">
          <div className="space-y-1">
            {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:text-gray-900 hover:bg-gray-50" */}
            <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md group">
              {/* Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" */}
              {/* Heroicon name: outline/home */}
              <svg className="w-6 h-6 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 group">
              {/* Heroicon name: outline/view-list */}
              <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              My tasks
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 group">
              {/* Heroicon name: outline/clock */}
              <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recent
            </a>
          </div>
          <div className="mt-8">
            {/* Secondary navigation */}
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="teams-headline">
              Teams
            </h3>
            <div className="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-primary-500 rounded-full" aria-hidden="true" />
                <span className="truncate">
                  Engineering
                </span>
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true" />
                <span className="truncate">
                  Human Resources
                </span>
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-50">
                <span className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true" />
                <span className="truncate">
                  Customer Success
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  )
}
