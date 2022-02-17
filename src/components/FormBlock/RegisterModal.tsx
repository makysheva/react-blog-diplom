import { FC } from 'react'
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { Form, Button, Modal, Input, Space } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import axios from 'axios'
import { instance } from '../../config/axios'

export interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

type FormData = {
    fullName: string
    email: string
    password: string
}

export const RegisterModal: FC<RegisterModalProps> = ({ open, onClose }) => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            instance.post('/auth/register', {
                fullName: data.fullName,
                email: data.email,
                password: data.password,
            })
                .then(res => {
                    window.localStorage.setItem('token', res.data.token)
                })
            reset()
            alert("Успешная регистрация!")
            onClose()
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Modal title="Зарегистрироваться" visible={open} onOk={onClose} onCancel={onClose}>
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
