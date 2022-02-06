import { FC } from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

interface LoginModalProps {
    open: boolean
    onClose: () => void
    handleClickOpenSignUp: Function
}

export const LoginModal: FC<LoginModalProps> = ({ open, onClose, handleClickOpenSignUp }): React.ReactElement => {
    return (
        <Modal title="Войти" visible={open} onOk={onClose} onCancel={onClose}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Введите имя' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                    или <a href="" onClick={(e: React.MouseEvent) => handleClickOpenSignUp(e)}>Зарегистрироваться!</a>
                </Form.Item>
            </Form>
        </Modal >
    )
};
