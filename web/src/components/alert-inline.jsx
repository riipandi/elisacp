import React from 'react'
import { ExclamationSolid } from '@graywolfai/react-heroicons'

const AlertInline = ({ color, message }) => {
  return (
    <div className={`p-3 border-l-4 border-${color}-400 rounded bg-${color}-50`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationSolid className={`w-5 h-5 text-${color}-400`} />
        </div>
        <div className="ml-3">
          <p className={`text-sm text-${color}-700`}>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default AlertInline
