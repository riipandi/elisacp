import Link from 'next/link'
import React from 'react'

export function Navbar({}) {
  return (
    <div className="grid items-center grid-cols-3 gap-8">
      <div className="col-span-2">
        <nav className="flex space-x-4">
          {/* <Link href="/">
            <a
              className="px-3 py-2 text-sm font-medium text-white bg-white bg-opacity-0 rounded-md hover:bg-opacity-10"
              aria-current="page"
            >
              Home
            </a>
          </Link> */}
          <Link href="/features">
            <a
              className="px-3 py-2 text-sm font-medium bg-white bg-opacity-0 rounded-md text-secondary-100 hover:bg-opacity-10"
              aria-current="false"
            >
              Features
            </a>
          </Link>
          <Link href="/quick-start">
            <a
              className="px-3 py-2 text-sm font-medium bg-white bg-opacity-0 rounded-md text-secondary-100 hover:bg-opacity-10"
              aria-current="false"
            >
              Quick Start
            </a>
          </Link>
          <Link href="/docs">
            <a
              className="px-3 py-2 text-sm font-medium bg-white bg-opacity-0 rounded-md text-secondary-100 hover:bg-opacity-10"
              aria-current="false"
            >
              Documentation
            </a>
          </Link>
          <Link href="/sponsors">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium bg-white bg-opacity-0 rounded-md text-secondary-100 hover:bg-opacity-10"
              aria-current="false"
            >
              Sponsors
            </a>
          </Link>
          <Link href="/support">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium bg-white bg-opacity-0 rounded-md text-secondary-100 hover:bg-opacity-10"
              aria-current="false"
            >
              Support
            </a>
          </Link>
        </nav>
      </div>
      <div>
        <div className="w-full max-w-md mx-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative text-gray-50 focus-within:text-gray-300">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Heroicon name: search */}
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              id="search"
              className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-300 bg-gray-900 bg-opacity-50 border border-transparent rounded-md text-gray-50 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-200 focus:ring-0 sm:text-sm"
              placeholder="Read the docs: cmd + k"
              type="search"
              name="search"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
