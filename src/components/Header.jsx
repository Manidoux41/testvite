import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
        <header>
            <div className="logo">
                <h1>My Portfolio</h1>
                <img src={Logo} alt="my logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header