import { FC } from 'react'
import { Card } from 'antd'

const { Meta } = Card

export const CardBlock: FC = () => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://cdn.dribbble.com/users/427857/screenshots/2125204/attachments/386812/thefox-wordpress-on-work-space.jpg" />}
        >
            <Meta title="Обо мне" description="Блог о реакт разработке" />
        </Card>
    )
}