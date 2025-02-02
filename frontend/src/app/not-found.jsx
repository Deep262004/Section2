import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold'>404</h1>
        <p className='tet-3xl font-bold'>Page not found</p>

        <button className='bg-black rounded-lg px-4 py-2 text-white'> Go to home page</button>
      </div>
    </div>
  )
}

export default NotFound;