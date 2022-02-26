import { FC, useState } from 'react'
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { Form, Button, Modal, Input, Space, message } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { instance } from '../../axios'
import { useNavigate } from 'react-router-dom'

interface RegisterModalProps {
    isOpenModal: boolean
    setIsOpenModal: (arg: boolean) => void
}

type FormData = {
    fullName: string
    email: string
    password: string
}

export const RegisterModal: FC<RegisterModalProps> = ({ isOpenModal, setIsOpenModal }) => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const navigate = useNavigate()

    const handleCloseModal = (): void => {
        setIsOpenModal(false)
        navigate('/', { replace: true })
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            instance.post('/auth/register', {
                fullName: data.fullName,
                email: data.email,
                password: data.password,
            })
                .then(res => {
                    window.localStorage.setItem('token', res.data.token)
                    reset()
                    message.success('Успешная регистрация!')
                    navigate('/profile', { replace: true })
                })
        } catch (error) {
            message.error(error)
        }
    }

    return (
        <Modal title="Зарегистрироваться" visible={isOpenModal} onOk={handleCloseModal} onCancel={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Item>
                    <Controller
                        render={
                            ({ field }) =>
                                <Input
                                    {...field}
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Введите имя"
                                    {...errors.fullName && "Введите имя"}
                                />
                        }
                        name="fullName"
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
                                <Input
                                    {...field}
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Введите email"
                                    {...errors.email && "Введите email"}
                                />
                        }
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                                message: 'Это неверная почта!',
                            },
                        })}
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
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </form>
        </Modal >
    )
};
