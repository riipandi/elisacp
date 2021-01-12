import React from 'react'
export function UsermenuDropdown({}) {
  {
    /*
        Profile dropdown panel, show/hide based on dropdown state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */
  }
  return (
    <div
      className="absolute z-40 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-2 ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Sign out
      </a>
    </div>
  )
}
