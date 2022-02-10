import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, SignIn } from './pages'

import "antd/dist/antd.css"
import './App.module.scss'

export const App: FC = () => {
  return (
    <Routes>
      {/* <Route path="/auth" element={<SignIn />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}