import { Typography } from 'antd'
import { CardBlock } from '../CardBlock'

const { Title } = Typography

export const About = () => {
    return (
        <>
            <Title style={{ fontSize: '65px', fontWeight: '800', marginBottom: '10px', color: '#002140' }}>React Blog</Title>
            <Title type="secondary" style={{ fontSize: '34px', margin: 0, marginBottom: '10px' }}>Блог фронтенд-разработчика</Title>
            <CardBlock />
        </>
    )
}
