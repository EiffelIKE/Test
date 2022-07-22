import React from 'react'
import url from '../Config'
import FriendsContainer from '../components/FriendsContainer'
import useFetchAPI from '../hooks/useFetchAPI'
import Loading from '../components/Loading'
import ErrorFetch from './ErrorFetch'
import '../components/styles/page.css'
import {useDispatch} from 'react-redux'
import {setFriendList} from '../store/friendSlice/friendSlice'

const FriendsListPage = ( ) =>{
  const {data, loading, error} = useFetchAPI(`${url}`)
  const dispatch = useDispatch()
  dispatch(setFriendList(data))

  if (loading) return <Loading />

  if (error) return <ErrorFetch/>

  return (
    <>
      <div className='page'>
        <FriendsContainer />
      </div>
    </>
  )
}

export default FriendsListPage

