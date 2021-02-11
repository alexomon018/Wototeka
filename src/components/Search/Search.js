import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  listPlayerInfos,
  playerPersonalDataInformation,
  playerPersonalVehiclesInformation,
  playerVehiclesStatsInformation,
} from '../../actions/playerActions'
import './Search.css'
import { FaSearch } from 'react-icons/fa'
function Search({ setIsSubmited }) {
  const dispatch = useDispatch()
  const playerInfo = useSelector((state) => state.playerInfo)
  const { playerData } = playerInfo
  const [radio, setRadio] = useState({ selectedOption: 'Player' })
  const [query, setQuery] = useState('santimania')
  useEffect(() => {
    dispatch(listPlayerInfos(query))
  }, [dispatch, query])

  const handleOptionChange = (e) => {
    setRadio({
      selectedOption: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(playerPersonalDataInformation(playerData[0].account_id))
    dispatch(playerPersonalVehiclesInformation(playerData[0].account_id))
    dispatch(playerVehiclesStatsInformation(playerData[0].account_id))
    setIsSubmited(true)
  }

  return (
    <div
      className='search__container'
      style={{
        backgroundImage: `url(${`https://wargaming.com/media/cache/18/5d/185df6942af7ab98e1d8b8aef607e0df.jpg`})`,
      }}
    >
      <div className='switch'>
        <input
          id='playerTab'
          type='radio'
          name='typeselect'
          value='Player'
          checked={radio.selectedOption === 'Player'}
          onChange={handleOptionChange}
        />
        <label htmlFor='playerTab'>Player</label>
        <input
          id='clanTab'
          type='radio'
          name='typeselect'
          value='Clan'
          checked={radio.selectedOption === 'Clan'}
          onChange={handleOptionChange}
        />
        <label htmlFor='clanTab'>Clan</label>
      </div>
      <form className='search__input' onSubmit={handleSubmit}>
        <FaSearch className='fa-serach' onClick={handleSubmit} />
        <input
          type='text'
          name='q'
          value={query}
          placeholder={
            radio.selectedOption === 'Player'
              ? 'Search Players'
              : 'Search Clans'
          }
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
