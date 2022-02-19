import { Typography } from 'antd'

const { Title } = Typography

export const TitleCard = () => {
    return (
        <>
            <Title style={{ fontSize: '65px', fontWeight: '800', marginBottom: '10px', color: '#002140' }}>React Blog</Title>
            <Title type="secondary" style={{ fontSize: '34px', margin: 0, marginBottom: '10px' }}>Блог фронтенд-разработчика</Title>
        </>
    )
}