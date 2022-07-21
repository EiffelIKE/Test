import React from 'react'
import {useNavigate} from 'react-router-dom'
import Card from './Card'
import './styles/Friend.css'

const Friends = ({friend}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('./Details')

  return (
    <div className='Friends-List'>
      {friend.map((friend)=>{
        return (
          <Card
            key={friend.id}
            img = {friend.img}
            fullName = {friend.first_name + ' ' + friend.last_name}
            {...friend}
            handleClick={handleClick}
          />)
      }
      )}
    </div>
  )
}

export default Friends
