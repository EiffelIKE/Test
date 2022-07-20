import React from 'react'
import url from '../Config'
import FriendsList from '../components/FriendsList'
import useFetchAPI from '../hooks/useFetchAPI'
import Loading from '../components/Loading'

const FriendsListContainer = ( ) =>{
  const {data, loading, error} = useFetchAPI(`${url}`)

  if (loading) return <Loading/>

  if (error) alert('Error')

  return <FriendsList friend={data}/>
}

export default FriendsListContainer

