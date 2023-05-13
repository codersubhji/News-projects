import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import Search from '../component/Search';

const Header = () => {

  const [showBtn, setShowBtn] = useState(false);
  const ShowBtn = () => {
    setShowBtn(!showBtn)
  }
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__Logo'>
          <h1>News</h1>
        </div>
        <div className='header__links'>
          <div className='inp_btn'>
            <Search />
          </div>
          <div className={`${showBtn ? '' : 'show'} nav__navbar `}   >
            <ul >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/treading'>Treading</NavLink>
              </li>
              <li>
                <NavLink to='/business'>Business</NavLink>
              </li>
              <li>
                <NavLink to='/health'>Health</NavLink>
              </li>
              <li>
                <NavLink to='/sports'>Sports</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className='bar' >
          <BiMenuAltRight className={`${showBtn ? '' : 'hide'} open`} onClick={ShowBtn} />
          <RxCross2 className={`${showBtn ? 'hide' : ''} close`} onClick={ShowBtn} />
        </div>
      </nav>
    </header>
  )
}

export default Header
