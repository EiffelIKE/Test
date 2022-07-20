import React from 'react'
import {useNavigate} from 'react-router-dom'

const Details = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center'>
      <p className='display-2'>
        Details Last Page!
      </p>
      <button type="button"
        className="btn btn-outline-secondary back"
        onClick={() => navigate('../Friends')}>Get Home</button>
    </div>
  )
}

export default Details
