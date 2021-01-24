import { useState, useEffect } from 'react'
import axios from 'axios'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&search=`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {
    const fetchPlayer = async (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(`${API_ID}${response.data.data[0].account_id}`)
        })
        .then((response) => {
          const id = response.config.url.slice(-9)
          setData(response.data.data[id])
          setIsLoading(false)
        })
    }

    // const fetchPlayerData = async (url) => {
    //   setIsLoading(true)
    //   try {
    //     const response = await fetch(url)
    //     const responseData = await response.json()
    //     if (responseData.status === 'ok') {
    //       setPlayerData(responseData.data[id])
    //       setError({ show: false, msg: '' })
    //     } else {
    //       setError({ show: true, msg: responseData.Error })
    //     }
    //     setIsLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // const id = data.map((data) => data.account_id)
    fetchPlayer(`${PLAYER_NAME}${urlParams}`)
    // fetchPlayerData(`${API_ID}${id}`)
  }, [urlParams])

  return {
    isLoading,
    error,
    data,
  }
}
export default useFetch
