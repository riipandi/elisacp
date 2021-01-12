import React from 'react'
export function SiteFooter({}) {
  return (
    <footer>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="items-center block py-6 text-sm tracking-tight text-center text-gray-400 border-t border-gray-300 md:flex md:justify-between md:text-left">
          <div>
            <p className="inline-flex text-center">
              Brought to you with
              <svg
                className="w-4 mx-1 text-red-500 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width={20}
                height={20}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              by
              <a
                href="https://twitter.com/riipandi"
                className="font-medium text-gray-600 hover:text-primary-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                &nbsp;Aris Ripandi&nbsp;
              </a>
            </p>
            {/* <span className="inline">&copy; 2020 - Aris Ripandi.</span>{' '}
            <span className="inline">All rights reserved.</span> */}
          </div>
          <div className="my-1">
            Icons made by{' '}
            <a
              href="https://www.freepik.com/"
              className="text-gray-600 hover:text-primary-700"
              title="Freepik"
              rel="noopener noreferrer"
              target="_blank"
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              href="httpss://www.flaticon.com/"
              className="text-gray-600 hover:text-primary-700"
              title="Flaticon"
              target="_blank"
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
