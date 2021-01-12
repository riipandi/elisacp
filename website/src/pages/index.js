import Head from 'next/head'
import Link from 'next/link'
// import SampleHomepage from '../components/sample-homepage'
import SiteLayout from '../components/site-layout'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>ElisaCP - Easy Linux Server Administration Control Panel</title>
      </Head>
      {/* <SampleHomepage /> */}
      <section className="mt-12 bg-gradient-to-r from-gray-900 to-gray-700 lg:mt-24">
        <div className="px-4 mx-auto mt-4 max-w-7xl sm:mt-8 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
              <span className="block">Manage linux servers</span>
              <span className="block mt-3 text-secondary-500">without hassle.</span>
            </h1>
            <p className="max-w-md mx-auto mt-4 text-base text-gray-300 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
              ElisaCP is an open source Linux Control Panel. It's written in Golang and React and
              runs as a single Linux binary with MySQL for database backend.
            </p>
            <div className="max-w-md mx-auto mt-6 sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow">
                <Link href="/quick-start">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent-600 hover:bg-accent-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/docs">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-secondary-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Documentation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-16">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-50" />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </section>

      <section id="feature-section" className="mt-12 bg-white lg:mt-16">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Feature Highlights</h2>
            <p className="mt-4 text-lg text-gray-500">
              Has your local development environment gotten needlessly complex? ElisaCP completely
              manages all of the command-line complexity so you can get back to work.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">Blazing fast</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit
                  quis ac. Lacus.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Simple, beautiful UI
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non
                  parturient.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Completely self-contained
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">Flexibility</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed
                  bibendum.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">Integrations</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing
                  turpis.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium leading-6 text-gray-900">Mobile app</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique
                  proin sed.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-xl bg-secondary-700 lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  {/* <span className="block">Start your free trial today.</span> */}
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  ElisCP is still a WIP (but you knew that). Sign up to join the open beta and keep
                  updated on our progress.
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md shadow text-secondary-600 hover:bg-secondary-50"
                >
                  Sign up for free
                </a> */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md text-secondary-600 hover:bg-secondary-50"
                >
                  Request early access
                  {/* Heroicon name: external-link */}
                  <svg
                    className="w-5 h-5 ml-3 -mr-1 text-secondary-400"
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
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
