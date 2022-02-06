import { FC } from 'react'
import { useForm } from "react-hook-form";
import { Form, Button, Modal, Input, Space } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

type FormData = {
    username: string
    email: string
    password: string
}

export const RegisterModal: FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const onSubmit = (data: any) => {
        console.log(data)
        reset()
    }

    return (
        <Modal title="Зарегистрироваться" visible={open} onOk={onClose} onCancel={onClose}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите имя',
                        },
                    ]}
                >
                    <Input
                        {...register("username")}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Введите email',
                        },
                    ]}
                >
                    <Input
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                                message: 'Это неверная почта!',
                            },
                        })}
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            {...register("password")}
                        />
                    </Space>
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleSubmit(onSubmit)} type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
};
