import { Card, Typography, Tabs } from 'antd'
import Title from 'antd/lib/typography/Title'
import { Link, Navigate } from 'react-router-dom'

const { TabPane } = Tabs

const { Text } = Typography

export const Profile = () => {

    function callback(key: any) {
        console.log(key);
    }

    if (!window.localStorage.getItem('token')) {
        return <Navigate to='/' />
    }

    return (
        <>
            <Link to="/" style={{ color: '#002140', fontSize: '22px', fontWeight: 700, margin: '20px 0 0 20px', display: 'block' }}>React Blog</Link>
            <Card style={{ margin: '50px auto', maxWidth: '500px', textAlign: 'center' }}>
                <Title style={{ color: '#002140' }}>Алия Мак</Title>
                <Text type="secondary">Дата регистрации: 18.02.2022</Text>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Статьи" key="1">
                        Статьи
                    </TabPane>
                    <TabPane tab="Комментарии" key="2">
                        Комментарии
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}
