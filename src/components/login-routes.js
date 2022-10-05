import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function LoginRoutes() {
      const login = localStorage.getItem('login')
      return (
            login ? <Outlet /> : <Navigate to="/register-login" />
      )
}
export default LoginRoutes