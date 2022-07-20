import React from 'react'

const NotFound = () => {
  return (
    <div className='errorfetch'>
      <div className='text-center'>
        <p className='display-2'>
          Error: 404
        </p>
        <p className='display-5'>
          Page Not Found
        </p>
        <button type="button"
          className="btn btn-outline-secondary back">Get Home</button>
      </div>
    </div>
  )
}

export default NotFound
