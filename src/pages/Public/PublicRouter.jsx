import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout, Home, Services, Portfolio, Contact } from '../../pages/Public'
import Error from '../../utils/Error'

const PublicRouter = () => {
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

export default PublicRouter