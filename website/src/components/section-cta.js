import React from 'react'
export function SectionCta({}) {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg shadow-xl bg-primary-700 lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              {/* <span className="block">Start your free trial today.</span> */}
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-200">
              ElisCP is still a WIP (but you knew that). Sign up to join the open beta and keep
              updated on our progress.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md text-primary-600 hover:bg-primary-50"
            >
              Request early access
              {/* Heroicon name: external-link */}
              <svg
                className="w-5 h-5 ml-3 -mr-1 text-primary-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            className="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
            src="/images/home-screenshot.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  )
}
