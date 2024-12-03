import React from 'react'
import { ButtonCloseModal, ModalContainerStyle, ModalContent } from '../ModalContainer/ModalContainerStyle'
import { IoCloseSharp } from 'react-icons/io5'

const ModalDeleteUser = () => {
    return (
        <ModalContainerStyle  >
            <ModalContent>
                <ButtonCloseModal >
                    <IoCloseSharp size={20} />
                </ButtonCloseModal>

                <p>Tem certeza que você deseja deletar o usuário?</p>
            </ModalContent>
        </ModalContainerStyle >

    )
}

export default ModalDeleteUser