import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='Header'>
        <div className="logo"><img src={logo} alt="" /></div>
        <ul className="nav">
            <li className="link"><a href="">Словарь</a></li>
        </ul>
    </div>
  )
}

export default Header