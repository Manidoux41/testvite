import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/admin/Header'
import SideMenu from '../../components/admin/SideMenu'

const ALayout = () => {
  return (
    <div className='ALayout'>
        <Header />
        <div id="admin">
          <SideMenu />
          <div id="admin__body">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default ALayout