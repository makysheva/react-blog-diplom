import { FC, useEffect, useState } from 'react'
import { Layout, Row, Col } from 'antd'

import { CardBlock, HeaderBlock, MenuBlock, Post, TitleCard, LoginModal, RegisterModal } from '../components'
import axios, { AxiosError, AxiosResponse } from 'axios'

const { Header, Content } = Layout

export const Home: FC = (): React.ReactElement => {
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp' | null>()
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        const token = window.localStorage.getItem('token') || [];
        if (token) {
            axios
                .get("/auth/me", {
                    headers: {
                        // @ts-ignore
                        Authorization: token,
                    },
                })
                .then((res: AxiosResponse) => setIsAuth(prev => !prev))
                .catch((error: AxiosError) => alert(error))
        }
    }, []);

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (e: React.MouseEvent) => {
        e.preventDefault()
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(null)
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Layout>
                <Content>
                    <Row>
                        <Col span={12}>
                            <TitleCard />
                            <CardBlock />
                        </Col>
                        <Col span={12}>
                            <Header>
                                <HeaderBlock />
                            </Header>
                            <Post />
                            <Post />
                            <Post />
                        </Col>
                    </Row>
                </Content>

            </Layout>

            <MenuBlock
                handleClickOpenSignIn={handleClickOpenSignIn}
                isAuth={isAuth}
            />

            <LoginModal
                open={visibleModal === 'signIn'}
                onClose={handleCloseModal}
                handleClickOpenSignUp={handleClickOpenSignUp}
            />
            <RegisterModal
                open={visibleModal === 'signUp'}
                onClose={handleCloseModal}
            />
        </Layout>
    )
};
