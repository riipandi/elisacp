import React from 'react'
export function MobileNav({}) {
  return (
    <div>
      {/*
Mobile menu overlay, show/hide based on mobile menu state.

Entering: "duration-150 ease-out"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "duration-150 ease-in"
  From: "opacity-100"
  To: "opacity-0"
    */}
      <div className="fixed inset-0 z-20 bg-black bg-opacity-25 lg:hidden" aria-hidden="true" />
      {/*
Mobile menu, show/hide based on mobile menu state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-150 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
    */}
      <div className="absolute inset-x-0 top-0 z-40 w-full max-w-3xl p-2 mx-auto transition origin-top transform lg:hidden">
        <div className="bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="pt-3 pb-2">
            <div className="flex items-center justify-between px-4">
              <div>
                <img className="w-auto h-8" src="/favicon.png" alt="ElisaCP" />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: x */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 mt-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Quick Start
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Sponsors
              </a>
            </div>
          </div>
          <div className="pt-4 pb-2">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://unavatar.now.sh/github/riipandi"
                  alt="user-avatar"
                />
              </div>
              <div className="flex-1 min-w-0 ml-3">
                <div className="text-base font-medium text-gray-800 truncate">Aris Ripandi</div>
                <div className="text-sm font-medium text-gray-500 truncate">riipandi@gmail.com</div>
              </div>
              <button className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: bell */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div className="px-2 mt-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
