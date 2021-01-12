import React from 'react'
export function AccentDotsLeft({}) {
  return (
    <svg
      className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>
  )
}
