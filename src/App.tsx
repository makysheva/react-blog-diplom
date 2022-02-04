import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, SignIn } from './pages'

import './App.module.scss'

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}