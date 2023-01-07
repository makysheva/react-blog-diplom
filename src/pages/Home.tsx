import { Dispatch, FC, SetStateAction } from 'react'
import { Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { Outlet } from 'react-router-dom'

import { HeaderBlock } from '../components/HeaderBlock'
import { Posts } from '../components/Posts'

interface HomeProps {
    isAuth: boolean
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

export const Home: FC<HomeProps> = ({ isAuth, setIsOpenModal }) => {
    return (
        <Row>
            <Col span={12} style={{ padding: '40px' }}>
                <Outlet />
            </Col>
            <Col span={12} >
                <Header>
                    <HeaderBlock isAuth={isAuth} setIsOpenModal={setIsOpenModal} />
                </Header>
                <Posts isAuth={isAuth} />
            </Col>
        </Row>
    )
}