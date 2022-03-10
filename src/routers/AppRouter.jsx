import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardRoutes } from './DashboardRoutes'
import { LoginPage } from '../components/login/LoginPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/*" element={ <DashboardRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
