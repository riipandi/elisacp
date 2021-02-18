import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-gray-50">
      <main>{children}</main>
    </div>
  )
}

export default AuthLayout
