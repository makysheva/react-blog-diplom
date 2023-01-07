import { FC, useState } from 'react'
import { Menu, Layout } from 'antd'
import { AntDesignOutlined, HighlightOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink, useNavigate, useParams } from 'react-router-dom'


const { Sider } = Layout

interface MenuBlockProps {
    isAuth: boolean
    setIsOpenModal: (arg: boolean) => void
}

export const MenuBlock: FC<MenuBlockProps> = ({ isAuth, setIsOpenModal }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const onCollapse = (collapsed: boolean) => {
        setCollapsed((collapsed) => !collapsed);
    }

    const handleClickLogin = () => {
        if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
            window.localStorage.removeItem('token')
            navigate('/', { replace: true })
        } else {
            setIsOpenModal(true)
            navigate('/login', { replace: true })
        }
    }

    const handleClickRegister = () => {
        setIsOpenModal(true)
        return navigate('/register', { replace: true })
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ height: '100vh' }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" title="Menu">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <NavLink to="/">Главная</NavLink>
                </Menu.Item>
                {
                    isAuth &&
                    <>
                        <Menu.Item key="2" icon={<UserOutlined />} >
                            <NavLink to="/profile">Мой профиль</NavLink>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<HighlightOutlined />}>
                            <NavLink to="/create">Создать запись</NavLink>
                        </Menu.Item>
                    </>
                }

                <Menu.Item key="4" icon={isAuth ? <LogoutOutlined /> : <LoginOutlined />} onClick={handleClickLogin}>
                    {isAuth ? "Выйти" : "Войти"}
                </Menu.Item>

                {
                    !isAuth &&
                    <Menu.Item key="5" icon={<AntDesignOutlined />} onClick={handleClickRegister}>
                        Зарегистрироваться
                    </Menu.Item>
                }
            </Menu>
        </Sider>
    )
}
