import React from 'react'
import { Helmet } from 'react-helmet'
import NavigationMobile from '../components/navigation-mobile'
import NavigationDesktop from '../components/navigation-desktop'

const DefaultLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        {title && (<title>{title} - Elisa Control Panel</title>)}
      </Helmet>
<div className="flex h-screen overflow-hidden bg-white">
  {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
  <NavigationMobile />
  {/* Static sidebar for desktop */}
  <NavigationDesktop />
  {/* Main column */}
  <div className="flex flex-col flex-1 w-0 overflow-hidden">
    {/* Search header */}
    <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:hidden">
      {/* Sidebar toggle, controls the 'sidebarOpen' sidebar state. */}
      <button className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden">
        <span className="sr-only">Open sidebar</span>
        {/* Heroicon name: outline/menu-alt=""-1 */}
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <div className="flex justify-between flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1">
          <form className="flex w-full md:ml-0" action="#" method="GET">
            <label htmlFor="search_field" className="sr-only">Search</label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                {/* Heroicon name: solid/search */}
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="search_field" name="search_field" className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search" />
            </div>
          </form>
        </div>
        <div className="flex items-center">
          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              <button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://unavatar.now.sh/github/riipandi" alt="user avatar" />
              </button>
            </div>
            {/*
        Profile dropdown panel, show/hide based on dropdown state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
            <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Notifications</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Get desktop app</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
      {children}
    </main>
  </div>
</div>
    </>
  )
}

export default DefaultLayout
