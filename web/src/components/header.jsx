import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="space-x-4">
      <Link to="/dashboard" className="text-lg text-primary-500">
        Dashboard
      </Link>
      <Link to="/about" className="text-lg text-primary-500">
        About
      </Link>
      <Link to="/" className="text-lg text-primary-500">
        Sign In
      </Link>
    </div>
  )
}
