import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ALayout, Dashboard } from '../../pages/Admin'

const AdminRouter = () => {
  return (
    <Routes>
          <Route element={<ALayout />}>
            
            <Route index element={<Dashboard />} />

            <Route path='dashboard' element={<Dashboard />}/>
          </Route>
    </Routes>
  )
}

export default AdminRouter