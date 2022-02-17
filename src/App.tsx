import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.module.scss'

import { Home } from './pages/Home'

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}