import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
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
          className="btn btn-outline-secondary back"
          onClick={() => navigate('./Friends')}>Get Home</button>
      </div>
    </div>
  )
}

export default NotFound
