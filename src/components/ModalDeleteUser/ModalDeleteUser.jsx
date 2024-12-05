import React, { useContext } from 'react'
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, ModalContainerStyle, ModalContent } from '../ModalContainer/ModalContainerStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalDeleteUserContext } from '../../context/ModalDeleteUser'

const ModalDeleteUser = () => {

    const { showModalDeleteUser, setShowModalDeleteUser, deleteUser } = useContext(ModalDeleteUserContext)

    return (
        showModalDeleteUser && <ModalContainerStyle>
            <ModalContent>
                <ButtonCloseModal >
                    <IoCloseSharp
                        size={20}
                        onClick={() => setShowModalDeleteUser(false)} />
                </ButtonCloseModal>

                <p>Tem certeza que você deseja deletar o usuário?</p>

                <ButtonsContainer>
                    <ButtonCreate onClick={() => deleteUser(false)}>
                        Confirmar
                    </ButtonCreate>

                    <ButtonCreate onClick={() => setShowModalDeleteUser(false)} >
                        Fechar
                    </ButtonCreate >
                </ButtonsContainer>
            </ModalContent>
        </ModalContainerStyle >

    )
}

export default ModalDeleteUser