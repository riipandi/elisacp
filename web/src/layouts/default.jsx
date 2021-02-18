import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'

const DefaultLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        {title && (<title>{title} - Elisa Control Panel</title>)}
      </Helmet>
      <div className="min-h-screen font-sans antialiased bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
