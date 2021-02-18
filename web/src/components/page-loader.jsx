import React from 'react'
import Loader from 'react-loader-spinner'

const PageLoader = ({ loading }) => {
  return (
    <>
    <div className={'flex items-center justify-center min-h-screen w-full' + (loading ? ' fixed' : ' hidden')}>
      <div className={'z-40 w-full h-full bg-black opacity-40' + (loading ? ' absolute' : '')}></div>
      <div className="z-50 flex flex-col items-center justify-center opacity-80">
        <Loader type="Circles" color="#ffffff" height={140} width={140} visible={(loading ? true : false)}/>
        <span className="mt-6 text-2xl font-medium text-white">
          Doing some magic, please wait ...
        </span>
      </div>
    </div>
    </>
  )
}

export default PageLoader
