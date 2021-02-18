import React from 'react'
import { Helmet } from 'react-helmet'

const PlainLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>{title && (<title>{title} - Elisa Control Panel</title>)}</Helmet>
      <div className="min-h-screen font-sans antialiased bg-gray-50">
        <main>{children}</main>
      </div>
    </>
  )
}

export default PlainLayout
