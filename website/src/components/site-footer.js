import React from 'react'
export function SiteFooter({}) {
  return (
    <footer>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="items-center block py-6 text-sm text-center text-gray-400 border-t border-gray-300 md:flex md:justify-between md:text-left">
          <div>
            <span className="inline">&copy; 2020 - Aris Ripandi.</span>{' '}
            <span className="inline">All rights reserved.</span>
          </div>
          <div className="my-1">
            Icons made by{' '}
            <a
              href="https://www.freepik.com/"
              className="text-gray-600 hover:text-primary-700"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              href="httpss://www.flaticon.com/"
              className="text-gray-600 hover:text-primary-700"
              title="Flaticon"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
