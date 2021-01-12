import Head from 'next/head'
import Link from 'next/link'
// import SampleHomepage from '../components/sample-homepage'
import SiteLayout from '../components/site-layout'
import { SectionCta } from './../components/section-cta'
// import { SectionNewsletter } from './../components/section-newsletter'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>ElisaCP - Easy Linux Server Administration Control Panel</title>
      </Head>
      {/* <SampleHomepage /> */}
      <section className="mt-12 bg-gradient-to-r from-gray-900 to-gray-700 lg:mt-24">
        <div className="relative px-4 mx-auto mt-4 max-w-7xl sm:mt-8 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
              <span className="block">Manage linux servers</span>
              <span className="block mt-3 text-primary-600">without hassle.</span>
            </h1>
            <p className="max-w-md mx-auto mt-4 text-base text-gray-300 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
              ElisaCP is an open source Linux Control Panel. It's written in Golang and React and
              runs as a single Linux binary with MySQL for database backend.
            </p>
            <div className="max-w-md mx-auto mt-6 sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow">
                <Link href="/quick-start">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/features">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-primary-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    All features
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
              className="relative border border-gray-400 rounded-lg shadow-lg"
              src="/images/home-screenshot.png"
              alt="app-screenshot"
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
        <SectionCta />
      </section>

      {/* <section className="bg-white">
        <SectionNewsletter />
      </section> */}
    </SiteLayout>
  )
}
