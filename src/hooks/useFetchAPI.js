import {useState, useEffect} from 'react'

const useFetchAPI = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    const fetchFriends = async () =>{
      try {
        const res = await fetch(`${url}`)
        const data = await res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchFriends()
  }, [url])
  return {data, loading, error}
}

export default useFetchAPI
