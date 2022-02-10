import { FC, useState } from 'react'
import { Menu, Layout } from 'antd'
import 'antd/dist/antd.css'

const { Sider } = Layout

interface MenuBlockProps {
    handleClickOpenSignIn: () => void
    isAuth: boolean
}

export const MenuBlock: FC<MenuBlockProps> = ({ handleClickOpenSignIn, isAuth }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onCollapse = (collapsed: boolean) => {
        setCollapsed((collapsed) => !collapsed);
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" title="Menu">
                <Menu.Item key="1">
                    Главная
                </Menu.Item>
                {
                    isAuth &&
                    <Menu.Item key="2">
                        Мой профиль
                    </Menu.Item>
                }

                {
                    isAuth &&
                    <Menu.Item key="3">
                        Создать запись
                    </Menu.Item>
                }

                <Menu.Item key="4" onClick={handleClickOpenSignIn}>
                    Войти
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
