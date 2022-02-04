import { FC } from 'react'
import { Modal } from 'antd'

interface ModalProps {
    title: string,
    children: React.ReactNode
}

export const ModalForm: FC<ModalProps> = ({ title, children }: ModalProps): React.ReactElement => {
    // const handleOk = () => {
    //     if(showLoginModal){
    //         setShowLoginModal(false)
    //     }
    //     else if(showRegistrationModal){
    //         setShowRegistrationModal(false)
    //     }
    // };

    // const handleCancel = () => {
    //     if(showLoginModal){
    //         setShowLoginModal(false)
    //     }
    //     else if(showRegistrationModal){
    //         setShowRegistrationModal(false)
    //     }
    // };

    return (
        <Modal>
            {children}
        </Modal>
    )
}

// title={showLoginModal ? "Вход" : "Регистрация"} visible={showLoginModal || showRegistrationModal} onOk={handleOk} onCancel={handleCancel}