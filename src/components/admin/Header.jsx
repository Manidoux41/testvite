import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Retour à l'accueil</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header