import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
