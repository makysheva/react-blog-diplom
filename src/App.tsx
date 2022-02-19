import { FC, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { LoginModal } from './components/FormBlock/LoginModal'
import { RegisterModal } from './components/FormBlock/RegisterModal'
import { MenuBlock } from './components/MenuBlock/MenuBlock'

import 'antd/dist/antd.css'
import './App.module.scss'

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const { pathname } = useLocation()
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    return token ? setIsAuth(true) : setIsAuth(false)
  }, [pathname, token])

  return (
    <>
      <Layout style={{ height: '100vh', background: '#fff' }}>
        <Layout style={{ background: '#fff', height: '100vh' }}>
          <Content>
            <Routes>
              <Route path='/' element={<Home isAuth={isAuth} setIsOpenModal={setIsOpenModal} />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/login' element={<LoginModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
              <Route path='/register' element={<RegisterModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
            </Routes>
          </Content>
        </Layout>
        <MenuBlock isAuth={isAuth} setIsOpenModal={setIsOpenModal} />
      </Layout>
    </>
  )
}