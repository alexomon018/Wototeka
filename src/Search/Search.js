import React, { useState } from 'react'
import './Search.css'
import { FaSearch } from 'react-icons/fa'
function Search() {
  const [radio, setRadio] = useState({ selectedOption: 'Player' })

  const handleOptionChange = (event) => {
    setRadio({
      selectedOption: event.target.value,
    })
  }
  console.log(radio)
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
      <form className='search__input'>
        <FaSearch className='fa-serach' />
        <input
          type='text'
          placeholder={
            radio.selectedOption === 'Player'
              ? 'Search Players'
              : 'Search Clans'
          }
        />
      </form>
    </div>
  )
}

export default Search
