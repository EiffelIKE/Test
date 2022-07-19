import React, {useState, useEffect} from 'react'
import url from '../Config'
import FriendsList from '../components/FriendsList'

const FriendsListContainer = ( ) =>{
  const [data, setData] = useState([])
  useEffect( () => {
    const fetchFriends = async () =>{
      const res = await fetch(`${url}`)
      const data = await res.json()
      setData(data)
    }
    fetchFriends()
  }, [])
  console.log(data)
  return (
    <>
      <FriendsList friend={data}/>
    </>
  )
}
export default FriendsListContainer

