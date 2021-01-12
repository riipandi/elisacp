import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { MobileNav } from './../components/mobile-nav'

const SiteLayout = ({ children }) => (
  <div className="overflow-x-hidden bg-gradient-to-r from-primary-500 to-secondary-500">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="pb-24 bg-gradient-to-r from-light-blue-800 to-primary-600">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative flex items-center justify-center py-5 lg:justify-between">
            {/* Logo */}
            <div className="absolute left-0 flex-shrink-0 lg:static">
              <a href="#">
                <span className="sr-only">ElisaCP</span>
                <img src="/favicon.png" className="w-auto h-8" alt="site-logo" />
                {/* <svg
                    className="w-auto h-8"
                    fill="none"
                    viewBox="0 0 35 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#A5F3FC"
                      d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
                    />
                  </svg> */}
              </a>
            </div>
            <div className="justify-start w-full px-5">
              <Navbar />
            </div>
            {/* Right section on desktop */}
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <button
                type="button"
                className="flex-shrink-0 p-1 rounded-full text-primary-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
              >
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
              {/* Profile dropdown */}
              <div className="relative flex-shrink-0 ml-4 mr-6">
                <div>
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
                  <a
                    href="#"
                    className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium leading-4 border border-transparent rounded-md shadow-md text-primary-900 bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
                  >
                    Get it now
                  </a>
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
          <div className="hidden py-5 border-t border-white lg:block border-opacity-20">
            {/* <Navbar /> */}
          </div>
        </div>
        <MobileNav />
      </header>
      <main className="flex-grow pb-8 -mt-24">{children}</main>
      <footer>
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="py-8 text-sm text-center text-gray-500 border-t border-gray-200 sm:text-left">
            <span className="block sm:inline">© Aris Ripandi.</span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
    <style jsx global>{`
      html,
      body {
        @apply font-sans antialiased;
      }
    `}</style>
  </div>
)

export default SiteLayout
