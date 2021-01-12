import Head from 'next/head'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

const SiteLayout = ({ children }) => (
  <div className="overflow-x-hidden bg-gray-50">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/app-icon-192.png" />
    </Head>
    <div className="flex flex-col min-h-screen">
      {/* <div className="relative top-0 pb-52 bg-gradient-to-r from-secondary-500 to-primary-500"> */}
      <div className="relative top-0 z-0 pb-48 bg-gradient-to-r from-gray-900 to-gray-700">
        <SiteHeader />
      </div>
      <main className="z-10 flex-grow pb-4 -mt-56 lg:pb-12">{children}</main>
      <SiteFooter />
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
