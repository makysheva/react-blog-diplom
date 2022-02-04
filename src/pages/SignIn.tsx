import { FC } from 'react'
import { Layout, Row, Col } from 'antd'
import { CardBlock, HeaderBlock, MenuBlock, Post, TitleCard, ModalForm, LoginForm, RegisterForm } from '../components'
// import 'antd/dist/antd.min.css'
const { Header, Content } = Layout

export const SignIn: FC = (): React.ReactElement => {
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

            <MenuBlock />
            <ModalForm title="Войти">
                <LoginForm />
            </ModalForm>
            <ModalForm title="Зарегистрироваться">
                <RegisterForm />
            </ModalForm>
        </Layout>
    )
};
