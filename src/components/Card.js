/* eslint-disable camelcase */
import React from 'react'
import './styles/Card.css'
// import friendimg from './styles/img.png'
const Card = ({img, first_name, last_name, status, available}) => {
  const handleClick = ()=>{
    console.log('Boton clicked')
  }
  const fullName = first_name + ' ' + last_name
  return (
    <div className='card'>
      <div className='card-body row'>
        <div className='col-2'>
          <div className='available'
            style={{background: '#16BA44', border: '2px solid #FFFFFF'}}/>
          <img src={`${img}`} alt='Friend Picture'/>
        </div>

        <div className='col-7'>
          <h1 className='card-title'>{fullName}</h1>
          <div className='status-container'>
            <p className='card-text'>{status}</p>
          </div>
        </div>

        <div className='col-2 mx-auto Details-Button'>
          <button className='btn btn-primary Button' onClick={handleClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
