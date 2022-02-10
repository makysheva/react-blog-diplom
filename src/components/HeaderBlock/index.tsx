import { FC } from 'react'
import { Button, Col, Input, Row } from 'antd'
import { EditOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons'
import styles from './HeaderBlock.module.scss'

const { Search } = Input

export const HeaderBlock: FC = (): React.ReactElement => {
    const onSearch = (value: string) => {
        console.log(value)
    }

    return (
        <Row className={styles.row}>
            <Col span={5}>
                <Button type="link">
                    React Blog
                </Button>

            </Col>
            {/*
            <Col span={12}>
                <Search className={styles.search} placeholder="Поиск" onSearch={onSearch} enterButton />
            </Col> */}

            <Col span={5} className={styles.btn}>
                <SearchOutlined className={styles.searchIcon} />
                <EditOutlined className={styles.editIcon} />
                <LogoutOutlined className={styles.LogoutIcon} />
            </Col>
        </Row>
    )
}