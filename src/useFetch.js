import { useState, useEffect } from 'react'
import axios from 'axios'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&search=`
const PLAYER_VEHICLES = `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [playerVehicles, setPlayerVehicles] = useState([])
  const [tankIds, setTankIds] = useState([])

  useEffect(() => {
    const fetchPlayer = async (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(`${API_ID}${response.data.data[0].account_id}`)
        })
        .then((response) => {
          console.log(response)
          const id = response.config.url.slice(-9)
          setData(response.data.data[id])
          setIsLoading(false)
          return response
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    fetchPlayer(`${PLAYER_NAME}${urlParams}`)
  }, [urlParams])

  useEffect(() => {
    const fetchPlayerVehicles = async (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(
            `${PLAYER_VEHICLES}${response.data.data[0].account_id}`
          )
        })
        .then((response) => {
          console.log(response)
          const id = response.config.url.slice(-9)
          setPlayerVehicles(response.data.data[id])
          const tanksids = response.data.data[id].map((item) => item.tank_id)
          setTankIds(tanksids)
        })
    }
    fetchPlayerVehicles(`${PLAYER_NAME}${urlParams}`)
  }, [urlParams])
  return {
    isLoading,
    data,
    playerVehicles,
  }
}
export default useFetch
