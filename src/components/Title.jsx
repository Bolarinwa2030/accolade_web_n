import React from 'react'

const Title = ({title, descr}) => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
      <p className=' mt-2 text-center text-gray-500 mb-6 text-base sm:text-lg md:text-xl'>{descr}</p>
    </div>
  )
}

export default Title
