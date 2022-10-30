import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='AHeader'>
      <li>
        <NavLink to='/administrator/dashboard'>Dashboard</NavLink>
      </li>
    </div>
  )
}

export default Header