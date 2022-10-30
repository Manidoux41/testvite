import React from 'react'
import Logo from './assets/logo.png'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <img src={Logo} alt="my logo" />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
    </div>
    )
}

export default App