import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiBattleTank } from 'react-icons/gi'
import { GoThreeBars } from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='navbar'>
        <div className='navbar__container container'>
          <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
            <GiBattleTank className='navbar__icon' />
            Wototeka
          </Link>
          <div className='menu__icon' onClick={handleClick}>
            {click ? <FaTimes /> : <GoThreeBars />}
          </div>
          <ul className={click ? 'nav__menu active' : 'nav__menu'}>
            <li className='nav__item'>
              <Link
                to='/login'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li className='nav__item'>
              <Link
                to='/serverstat'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                EU Server Statistics
              </Link>
            </li>

            <li className='nav__item'>
              <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                Best Mods
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/contact'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                Wot Groups
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar
