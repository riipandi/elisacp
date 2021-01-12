import Link from 'next/link'
import React from 'react'
import { Navbar } from '../components/navbar'
import { MobileNav } from './../components/mobile-nav'

export function SiteHeader({}) {
  return (
    <header className="z-20 bg-transparent">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex items-center justify-center py-5 lg:justify-between">
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0 lg:static">
            <Link href="/">
              <a>
                <span className="sr-only">ElisaCP</span>
                <img src="/favicon.png" className="w-auto h-8" alt="site-logo" />
              </a>
            </Link>
          </div>
          <div className="justify-start w-full px-2 lg:pl-5 lg:pr-2">
            <Navbar />
          </div>
          {/* Right section on desktop */}
          <div className="hidden lg:flex lg:items-center lg:pr-0.5">
            {/* <button
            type="button"
            className="flex-shrink-0 p-1 rounded-full text-primary-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
            >
            <span className="sr-only">View notifications</span>
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
            </button> */}
            {/* Profile dropdown */}
            <div className="relative flex-shrink-0 mx-4">
              <div>
                <Link href="/download">
                  <a className="inline-flex items-center px-5 py-2.5 text-sm tracking-wide font-semibold leading-4 border border-transparent rounded-md shadow-md text-white bg-secondary-700 hover:bg-secondary-600 focus:outline-none">
                    Get it now
                  </a>
                </Link>
                {/* <button
                 type="button"
                 className="flex text-sm bg-white rounded-full ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                 id="user-menu"
                 aria-haspopup="true"
                >
                 <span className="sr-only">Open user menu</span>
                 <img
                   className="w-8 h-8 rounded-full"
                   src="https://unavatar.now.sh/github/riipandi"
                   alt="user-avatar"
                 />
                </button> */}
              </div>
              {/* <UsermenuDropdown /> */}
            </div>
          </div>
          {/* Search */}
          <div className="flex-1 min-w-0 px-12 lg:hidden">
            <div className="w-full max-w-xs mx-auto">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-white focus-within:text-gray-600">
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
                  className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white bg-white border border-transparent rounded-md bg-opacity-20 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Read the docs"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>
          {/* Menu button */}
          <div className="absolute right-0 flex-shrink-0 lg:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 bg-transparent rounded-md text-primary-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/*
              Heroicon name: menu
              Menu open: "hidden", Menu closed: "block"
              */}
              <svg
                className="block w-6 h-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*
              Heroicon name: x
              Menu open: "block", Menu closed: "hidden"
              */}
              <svg
                className="hidden w-6 h-6"
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
        <div className="hidden py-5 border-t border-white border-opacity-40 lg:block">
          {/* <Navbar /> */}
        </div>
      </div>
      <MobileNav />
    </header>
  )
}
