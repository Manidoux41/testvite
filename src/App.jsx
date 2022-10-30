import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PublicRoute from './pages/Public/PublicRoute'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoute />
      </BrowserRouter>      
    </div>
    )
}

export default App