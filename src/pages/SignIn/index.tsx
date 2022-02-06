import { FC, useState } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import { CardBlock, HeaderBlock, MenuBlock, Post, TitleCard } from '../../components'
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
// import 'antd/dist/antd.min.css'
import 'antd/dist/antd.css'

const { Header, Content, Sider } = Layout

export const SignIn: FC = (): React.ReactElement => {
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp' | ''>()
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onCollapse = (collapsed: boolean) => {
        setCollapsed((collapsed) => !collapsed);
    }

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (e: React.MouseEvent) => {
        e.preventDefault()
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal('')
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Layout>
                <Header>
                    <HeaderBlock />
                </Header>

                <Content>
                    <Row>
                        <Col span={12}>
                            <TitleCard />
                            <CardBlock />
                        </Col>
                        <Col span={12}>
                            <Post />
                            <Post />
                            <Post />
                        </Col>
                    </Row>
                </Content>

            </Layout>

            {/* <MenuBlock /> */}
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" title="Menu">
                    <Menu.Item key="1">
                        Главная
                    </Menu.Item>
                    <Menu.Item key="2">
                        Мой профиль
                    </Menu.Item>
                    <Menu.Item key="3">
                        Создать запись
                    </Menu.Item>
                    <Menu.Item key="4" onClick={handleClickOpenSignIn}>
                        Войти
                    </Menu.Item>
                </Menu>
            </Sider>

            <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} handleClickOpenSignUp={handleClickOpenSignUp} />
            <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />
        </Layout>
    )
};
