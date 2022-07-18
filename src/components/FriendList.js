import React, {useState, useEffect} from 'react'

/*eslint-disable*/
import Card from './Card'
const FriendList = () => {
   const[data,setData] = useState([])
   useEffect( () => {
       const fetchFriends = async() =>{
           let res = await fetch('http://private-5bdb3-friendmock.apiary-mock.com/friends')
           let data = await res.json()
           setData(data)
       }
       fetchFriends()
       
   },[])   
  return (
    <div>
       {data.map((friend)=>{
           return <Card key={friend.id} data={friend}/>
       }
       )}
    </div>
  )
}
export default FriendList
