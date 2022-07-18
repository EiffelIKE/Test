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
      <div className='card-body row'>
        <div className='col-2'>
          <div className='available'
            style={{background: '#16BA44', border: '2px solid #FFFFFF'}}/>
          <img src={friendimg} alt='Friend Picture'/>
        </div>

        <div className='col-7'>
          <h1 className='card-title'>{fullName}</h1>
          <div className='status-container'>
            <p className='card-text'>{data.status}</p>
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
