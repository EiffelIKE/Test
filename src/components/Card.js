import React from 'react'
import './styles/Card.css'
import friendimg from './styles/img.png'

const Card = ({img, fullName, status, available, handleClick, id}) => {
  const styleAvailable = {
    case1: {background: '#16BA44', border: '2px solid #FFFFFF'},
    case0: {background: '#B1B9DB', border: '2px solid #F4F6FE'}
  }
  return (
    <div className='card'>
      <div className='card-body row'>
        <div className='col-2'>
          <div className='available'
            style={ available ? styleAvailable.case1 : styleAvailable.case0 }/>
          <img src={friendimg } alt='Friend Picture'/>
        </div>

        <div className='col-7'>
          <h1 className='card-title'>{fullName}</h1>
          <div className='status-container'>
            <p className='card-text' title={`${status}`}>
              {status.length > 30 ? status.substring(0, 27)+'...' : status}</p>
          </div>
        </div>

        <div className='col-2 mx-auto Details-Button'>
          <button className='btn btn-primary Button'
            data-id={id} onClick={handleClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
