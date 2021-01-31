import { useState, useEffect } from 'react'
import axios from 'axios'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&search=`
const PLAYER_VEHICLES = `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const ALL_VEHICLES = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env.REACT_APP_APP_ID}&tank_id=`
const PLAYER_VEHICLE_STATISTIC = `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [playerVehicles, setPlayerVehicles] = useState([])
  const [tankIds, setTankIds] = useState([])
  const [tanks, setTanks] = useState([])
  const [playerVehiclesStats, setPlayerVehiclesStats] = useState([])

  useEffect(() => {
    const fetchPlayer = (url) => {
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
    const fetchPlayerVehicles = (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(
            `${PLAYER_VEHICLES}${response.data.data[0].account_id}`
          )
        })
        .then((response) => {
          const id = response.config.url.slice(-9)
          setPlayerVehicles(response.data.data[id])
          const tanksids = response.data.data[id].map((item) => item.tank_id)
          setTankIds(tanksids)
        })
      fetchPlayerVehicles(`${PLAYER_NAME}${urlParams}`)
    }
  }, [urlParams])
  useEffect(() => {
    const fetchPlayerVehicleStatistics = (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(
            `${PLAYER_VEHICLE_STATISTIC}${response.data.data[0].account_id}`
          )
        })
        .then((response) => {
          const id = response.config.url.slice(-9)
          setPlayerVehiclesStats(response.data.data[id])
        })
    }
    fetchPlayerVehicleStatistics(`${PLAYER_NAME}${urlParams}`)
  }, [urlParams])
  useEffect(() => {
    const fetchTanks = (url) => {
      setIsLoading(true)
      axios
        .get(url)
        .then((response) => {
          return axios.get(`${ALL_VEHICLES}`)
        })
        .then((response) => {
          setTanks(response.data.data)
        })
    }
    fetchTanks(`${PLAYER_NAME}${urlParams}`)
  }, [urlParams])
  return {
    isLoading,
    data,
    playerVehicles,
    playerVehiclesStats,
    tanks,
  }
}
export default useFetch
