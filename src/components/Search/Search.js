import React, { useState, useRef } from 'react'
import './Search.css'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
function Search() {
  const [radio, setRadio] = useState({ selectedOption: 'Player' })
  const { setQuery, setIsSubmitted } = useGlobalContext()

  const nameRef = useRef()
  const handleOptionChange = (e) => {
    setRadio({
      selectedOption: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    setQuery(name)
    setIsSubmitted(true)
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
          id='player'
          placeholder={
            radio.selectedOption === 'Player'
              ? 'Search Players'
              : 'Search Clans'
          }
          ref={nameRef}
        />
      </form>
    </div>
  )
}

export default Search
