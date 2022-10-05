import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function NonLoginRoutes() {
      const login = localStorage.getItem('login')
      return (
            !login ? <Outlet /> : <Navigate to='/'/>
      )
}
export default NonLoginRoutes