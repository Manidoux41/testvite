import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/public/Header'

const Layout = () => {
  return (
    <div className='layout'>
        <Header />
        <Outlet></Outlet>
    </div>
  )
}

export default Layout