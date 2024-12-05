import React, { useContext } from 'react'
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, ModalContainerStyle, ModalContent } from '../ModalContainer/ModalContainerStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalUpdateUserContext } from '../../context/ModalUpdateUser'

const ModalUpdateUser = () => {

    const { showModalUpdateUser, setShowModalUpdateUser, updateUser } = useContext(ModalUpdateUserContext)

    return (
        showModalUpdateUser && <ModalContainerStyle>
            <ModalContent>
                <ButtonCloseModal >
                    <IoCloseSharp
                        size={20}
                        onClick={() => setShowModalUpdateUser(false)} />
                </ButtonCloseModal>

                <p>Tem certeza que você deseja editar o usuário?</p>

                <ButtonsContainer>
                    <ButtonCreate onClick={() => updateUser(false)}>
                        Confirmar
                    </ButtonCreate>

                    <ButtonCreate onClick={() => setShowModalUpdateUser(false)} >
                        Fechar
                    </ButtonCreate >
                </ButtonsContainer>
            </ModalContent>
        </ModalContainerStyle >

    )
}

export default ModalUpdateUser