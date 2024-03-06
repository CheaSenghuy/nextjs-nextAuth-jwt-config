import React from 'react'

const Loading = () => {
  return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
      <div className='pb-4'>
        <h1>Just give us a second.</h1>
      </div>
      <div className='flex justify-center items-center animate-pulse text-7xl '>
        . . .
      </div>
    </div>
  )
}

export default Loading