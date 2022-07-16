import React from 'react'
import './styles/Card.css'

import friendimg from './styles/img.png'
const Card = ({data}) => {
  const handleClick = ()=>{
    console.log('Boton clicked')
  }
  const fullName = data.first_name + ' ' + data.last_name
  return (
    <div className='card'>
      <div className='card-container'>
        <a className='available'/>
        <div className='img-container'>
          <div className='img'
            style={{background: `url(${friendimg})`}}/>
        </div>
        <div className = "info">
          <h1>{fullName}</h1>
          <div className='status-container'>
            <div className='status'> {data.status}</div>
          </div>
        </div>
        <div className='button-container' onClick={handleClick}>
          <button className='button'>
            <div className='button-text'>
               Details
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
