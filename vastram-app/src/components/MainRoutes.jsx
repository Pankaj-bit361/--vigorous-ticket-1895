import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Home} from "../pages/Home"
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

