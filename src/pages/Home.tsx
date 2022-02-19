import { Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { Dispatch, FC, SetStateAction } from 'react'

import { CardBlock } from '../components/CardBlock'
import { HeaderBlock } from '../components/HeaderBlock'
import { Post } from '../components/Post'

import { TitleCard } from '../components/TitleCard'

interface HomeProps {
    isAuth: boolean
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

export const Home: FC<HomeProps> = ({ isAuth, setIsOpenModal }) => {
    return (
        <Row>
            <Col span={12} style={{ paddingTop: '50px', paddingLeft: '40px' }}>
                <TitleCard />
                <CardBlock />
            </Col>
            <Col span={12} >
                <Header>
                    <HeaderBlock isAuth={isAuth} setIsOpenModal={setIsOpenModal} />
                </Header>
                <Post />
                <Post />
                <Post />
            </Col>
        </Row>
    )
}
