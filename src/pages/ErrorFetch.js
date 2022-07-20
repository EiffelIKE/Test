import React from 'react'
import '../components/styles/Errors.css'

const ErrorFetch = () => {
  return (
    <div className='errorfetch'>
      <div className='text-center'>
        <p className='display-2'>
          Error: 500
        </p>
        <p className='display-5'>
          Unexpected Error
        </p>
        <button type="button"
          className="btn btn-outline-secondary back">Get Back</button>
      </div>
    </div>
  )
}

export default ErrorFetch
