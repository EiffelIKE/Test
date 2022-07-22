import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import useFetchAPI from '../hooks/useFetchAPI'
import url from '../Config'
import Loading from '../components/Loading'
import ErrorFetch from './ErrorFetch'
import {setDetails} from '../store/detailSlice/detailSlice'

const Details = () => {
  const navigate = useNavigate()
  const {data, loading, error} = useFetchAPI(`${url}/id`)
  const dispatch = useDispatch()

  if (loading) return <Loading/>
  if (error) return <ErrorFetch/>
  dispatch(setDetails(data))

  return (
    <div className='page'>
      <div className='text-center'>
        <p className='display-2'>
          Details Last Page!
        </p>
        <button type="button"
          className="btn btn-outline-secondary back"
          onClick={() => navigate('../Friends')}>Get Home</button>
      </div>
    </div>
  )
}

export default Details
