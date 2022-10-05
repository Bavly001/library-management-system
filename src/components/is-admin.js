import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function IsAdmin() {
      const is_admin = JSON.parse(localStorage.getItem('login')).token
      return (
            is_admin ? <Outlet /> : <Navigate to="/register-login" />
      )
}
export default IsAdmin