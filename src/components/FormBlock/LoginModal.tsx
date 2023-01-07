import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { Button, Form, Input, Modal, Space, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons'
import { instance } from '../../axios'
interface LoginModalProps {
    isOpenModal: boolean
    setIsOpenModal: (arg: boolean) => void
}

type FormData = {
    fullName: string
    email: string
    password: string
}

export const LoginModal: FC<LoginModalProps> = ({ isOpenModal, setIsOpenModal }) => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const navigate = useNavigate()

    const handleCloseModal = () => {
        setIsOpenModal(false)
        navigate('/', { replace: true })
    }

    const onSubmit: SubmitHandler<FormData> = (data: any) => {
        try {
            instance.post('/auth/login', {
                email: data.email,
                password: data.password,
            })
                .then(res => {
                    window.localStorage.setItem('token', res.data.token)
                    reset()
                    message.success('Успешная авторизация!')
                    navigate('/profile', { replace: true })
                })
        } catch (error) {
            message.error(error)
        }

    }

    return (
        <Modal title="Войти" visible={isOpenModal} onOk={handleCloseModal} onCancel={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Item>
                    <Controller
                        render={
                            ({ field }) =>
                                <Input
                                    {...field}
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Введите email"
                                    {...errors.fullName && "Введите email"}
                                />
                        }
                        {...register("email")}
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Controller
                        render={
                            ({ field }) =>
                                <Space direction="vertical" style={{ width: '100%' }}>
                                    <Input.Password
                                        {...field}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Password"
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        {...errors.password && "Введите пароль"}
                                    />
                                </Space>
                        }
                        {...register("password")}
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                    &nbsp; или <NavLink to="/register">Зарегистрироваться!</NavLink>
                </Form.Item>
            </form>
        </Modal >
    )
};
