import Head from 'next/head'
import SiteLayout from '../components/site-layout'
import { SectionCta } from './../components/section-cta'

export default function Faq() {
  return (
    <SiteLayout>
      <Head>
        <title>Frequently Asked Questions - ElisaCP</title>
      </Head>
      {/* This example requires Tailwind CSS v2.0+ */}
      <section className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:pb-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
          <div className="pt-10 mt-6 border-t-2 border-gray-600 border-opacity-25">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  What's the best thing about Switzerland?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  How do you make holy water?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <SectionCta />
      </section>
    </SiteLayout>
  )
}
