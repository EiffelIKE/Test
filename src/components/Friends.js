import React from 'react'
import Card from './Card'
import './styles/Friend.css'

const Friends = ({friend}) => {
  return (
    <div className='Friends-List'>
      {friend.map((friend)=>{
        return (
          <Card
            key={friend.id}
            {...friend}
          />)
      }
      )}
    </div>
  )
}

export default Friends
