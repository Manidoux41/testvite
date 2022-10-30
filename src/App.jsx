import React from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Error from './utils/Error'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>      
    </div>
    )
}

export default App