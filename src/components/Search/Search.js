import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listPlayerData } from '../../actions/playerActions'

import './Search.css'
import { FaSearch } from 'react-icons/fa'
function Search({ setIsSubmited }) {
  const dispatch = useDispatch()
  const [radio, setRadio] = useState({ selectedOption: 'Player' })
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
    if (query) {
      dispatch(listPlayerData(query))
      setIsSubmited(true)
      setQuery('')
    }
  }

  const handleOptionChange = (e) => {
    setRadio({
      selectedOption: e.target.value,
    })
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
