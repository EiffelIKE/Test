import React from 'react'
import './styles/FriendsList.css'
import './styles/Title.css'
import Friends from './Friends'
import Tittle from './Tittle'

const FriendsList = ({friend}) => {
  return (
    <div className='Friends-Container'>
      <Tittle/>
      <Friends className='Friends-List' friend = {friend}/>
    </div>
  )
}
export default FriendsList
