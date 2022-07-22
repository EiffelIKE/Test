import React from 'react'
import './styles/Card.css'
import friendimg from './styles/img.png'

const Card = ({handleClick, id, ...friend}) => {
  const styleAvailable = {
    case1: {background: '#16BA44', border: '2px solid #FFFFFF'},
    case0: {background: '#B1B9DB', border: '2px solid #F4F6FE'}
  }
  return (
    <div className='card'>
      <div className='card-body row'>
        <div className='col-2'>
          <div className='available'
            style={
              friend.available ? styleAvailable.case1 : styleAvailable.case0
            }/>
          <img src={friendimg } alt='Friend Picture'/>
        </div>

        <div className='col-7'>
          <h1 className='card-title'>{friend.first_name} {friend.last_name}</h1>
          <div className='status-container'>
            <p className='card-text' title={`${friend.status}`}>
              {friend.status.length > 30 ?
              friend.status.substring(0, 27)+'...' : friend.status}</p>
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
