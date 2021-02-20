import React from 'react'
import Loader from 'react-loader-spinner'

const PageLoader = ({ loading }) => {
  return (
    <>
    <div className={'flex items-center justify-center min-h-screen w-full' + (loading ? ' absolute' : ' hidden')}>
      <div className={'z-100 w-full h-full bg-black opacity-40' + (loading ? ' absolute' : '')}></div>
      <div className="flex flex-col items-center justify-center z-100 opacity-80">
        <Loader type="Circles" color="#ffffff" height={120} width={120} visible={(loading ? true : false)}/>
        <span className="mt-6 text-xl font-light text-white md:text-2xl">
          Doing some magic, please wait ...
        </span>
      </div>
    </div>
    </>
  )
}

export default PageLoader
