import { FC, useState } from 'react'
import { Menu, Layout } from 'antd'
import 'antd/dist/antd.css'

const { Sider } = Layout
// const { SubMenu } = Menu

export const MenuBlock: FC = () => {
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
                <Menu.Item key="2">
                    Мой профиль
                </Menu.Item>
                <Menu.Item key="3">
                    Создать запись
                </Menu.Item>
                <Menu.Item key="4">
                    Войти
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
