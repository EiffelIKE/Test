import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import {setId} from '../store/detailSlice/detailSlice'
import './styles/Friend.css'

const Friends = () => {
  const navigate = useNavigate()
  const {list} = useSelector((state)=>state.friend)
  const dispatch = useDispatch()

  const handleClick = (e) =>{
    const friendId = e.target.dataset.id
    dispatch(setId(friendId))
    e.preventDefault()
    navigate('./Details')
  }

  return (
    <div className='Friends-List'>
      {list.map((friend)=>{
        return (
          <Card
            key={friend.id}
            handleClick={handleClick}
            id ={friend.id}
            {...friend}
          />)
      }
      )}
    </div>
  )
}

export default Friends
