import { FC, useState } from 'react'
import { Button, Col, Input, Row } from 'antd'
import { EditOutlined, LoginOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons'
import styles from './HeaderBlock.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const { Search } = Input

interface HeaderBlockProps {
    isAuth: boolean
    setIsOpenModal: (arg: boolean) => void
}

export const HeaderBlock: FC<HeaderBlockProps> = ({ isAuth, setIsOpenModal }): React.ReactElement => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [isVisibleSearchInput, setIsVisibleSearchInput] = useState<boolean>(false)
    const navigate = useNavigate()

    const onSearch = (value: string) => {
        console.log(value)
    }

    const toggleShowSearch = (event: any) => {
        setIsVisibleSearchInput(true)
    }

    const handleChangeSearch = (event: any) => {
        const { value } = event.target
        setSearchValue(value)
    }

    const handleClickAuth = () => {
        if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
            window.localStorage.removeItem('token')
            navigate('/', { replace: true })
        } else {
            setIsOpenModal(true)
            navigate('/login', { replace: true })
        }
    }

    return (
        <Row className={styles.row}>
            <Col span={8}>
                <Link to="/" style={{ color: '#fff', fontSize: '16px' }}>
                    React Blog
                </Link>

            </Col>

            {
                isVisibleSearchInput &&
                <Col span={12}>
                    <Search className={styles.search} placeholder="Поиск" value={searchValue} onChange={event => handleChangeSearch(event)} onSearch={onSearch} enterButton />
                </Col>
            }

            <Col span={6} className={styles.btn}>
                {isAuth && <SearchOutlined className={styles.icon} onClick={toggleShowSearch} />}
                {isAuth && <Link to="/create"><EditOutlined className={styles.icon} /></Link>}
                {isAuth ? <LogoutOutlined onClick={handleClickAuth} className={styles.icon} /> : <LoginOutlined onClick={handleClickAuth} className={styles.icon} />}
            </Col>
        </Row>
    )
}