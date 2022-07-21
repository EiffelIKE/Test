import React from 'react'
import url from '../Config'
import FriendsContainer from '../components/FriendsContainer'
import useFetchAPI from '../hooks/useFetchAPI'
import Loading from '../components/Loading'
import ErrorFetch from './ErrorFetch'
import '../components/styles/page.css'

const FriendsListPage = ( ) =>{
  const {data, loading, error} = useFetchAPI(`${url}`)

  if (loading) return <Loading />

  if (error) return <ErrorFetch/>

  return (
    <div className='page'>
      <FriendsContainer friend={data}/>
    </div>
  )
}

export default FriendsListPage

