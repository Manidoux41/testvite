import React from 'react'
import { Outlet } from 'react-router-dom'

const ALayout = () => {
  return (
    <div className='ALayout'>
        Layout
        <Outlet />
    </div>
  )
}

export default ALayout