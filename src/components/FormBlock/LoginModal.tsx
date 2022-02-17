import { Dispatch, FC, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { Button, Form, Input, Modal, Space } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, HistoryOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { instance } from '../../config/axios'
import axios from 'axios'

interface LoginModalProps {
    open: boolean
    onClose: () => void
    handleClickOpenSignUp: Function
}

type FormData = {
    fullName: string
    email: string
    password: string
}

export const LoginModal: FC<LoginModalProps> = ({ open, onClose, handleClickOpenSignUp }) => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormData> = (data: any) => {
        axios
            .post(
                "/login",
                {
                    username: data.email,
                    password: data.password
                }
            )
            .then(res => {
                console.log(666, res);
                window.localStorage.setItem('token', res.data.token)
                navigate('/', { replace: true })
            })
            .catch(err => {
                console.log(err);
            })

        reset()
        onClose()
    }

    return (
        <Modal title="Войти" visible={open} onOk={onClose} onCancel={onClose}>
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
                    &nbsp; или <a onClick={(e: React.MouseEvent) => handleClickOpenSignUp(e)}>Зарегистрироваться!</a>
                </Form.Item>
            </form>
        </Modal >
    )
};
