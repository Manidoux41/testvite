import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRouter from './pages/Admin/AdminRouter'
import PublicRouter from './pages/Public/PublicRouter'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
          <Route path='administrator/*' element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>      
    </div>
    )
}

export default App