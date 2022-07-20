import React from 'react'
import '../components/styles/ErrorFetch.css'
import arrow from '../components/styles/Vector.jpg'

const ErrorFetch = () => {
  return (
    <div className='errorfetch'>
      <button className='button-container'>
        <img src={arrow} className='arrow'/>
      </button>
      <div className='text-center'>
        <p className='display-2'>
          Error: 500
        </p>
        <p className='display-5'>
          Unexpected Error
        </p>
      </div>
    </div>
  )
}

export default ErrorFetch
