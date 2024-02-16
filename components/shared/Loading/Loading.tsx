import React from 'react'

const Loading = () => {
  return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
      <div className='pb-4'>
        <h1>Just give us a second.</h1>
      </div>
      <div className='flex justify-center items-center'>
      <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 animate-spin'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.023 9.348h4.992v1.146a2.25 2.25 0 01-2.25 2.25H5.977l1.348 9.093a2.25 2.25 0 01-2.184 1.009l-4.096-3.78a2.25 2.25 0 00-2.15-.996 2.117 2.117 0 00-1.664-1.185L1.827 15.435a2.25 2.25 0 01-1.009-2.184L6.156 5.668A2.25 2.25 0 017.344 4.82l8.387 7.506z'
      />
    </svg>
      </div>
    </div>
  )
}

export default Loading