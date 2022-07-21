import React from 'react'
import Friends from './Friends'
import Tittle from './Tittle'
import './styles/FriendsContainer.css'
import './styles/Title.css'


const FriendsContainer = ({friend}) => {
  return (
    <div className='Friends-Container'>
      <Tittle/>
      <Friends friend = {friend}/>
    </div>
  )
}
export default FriendsContainer
