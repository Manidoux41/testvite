import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../../utils/Error'
import Contact from './Contact'
import Home from './Home'
import Layout from './Layout'
import Portfolio from './Portfolio'
import Services from './Services'

const PublicRoute = () => {
  return (
    <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='/home' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>

            <Route path='*' element={<Error />}/>
          </Route>

        </Routes>
  )
}

export default PublicRoute