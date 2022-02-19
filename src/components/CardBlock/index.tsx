import { FC } from 'react'
import { Card } from 'antd'

const { Meta } = Card

export const CardBlock: FC = () => {
    return (
        <Card
            hoverable
            style={{ width: '520px' }}
            cover={<img alt="example" src="https://cdn.dribbble.com/users/427857/screenshots/2125204/attachments/386812/thefox-wordpress-on-work-space.jpg" />}
        >
            <Meta title="" description="React делает безболезным создание интерактивных пользовательских интерфейсов. Создавайте простые представления для каждого состояния вашего приложения, и React будет эффективно обновлять и отрисовать только нужные компоненты при изменении ваших данных. Декларативные представления делают ваш код более предсказуемым и легче для отладки." />
        </Card>
    )
}