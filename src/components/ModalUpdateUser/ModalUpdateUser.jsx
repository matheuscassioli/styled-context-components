import React, { useContext, useState } from 'react'
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from '../ModalContainer/ModalContainerStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalUpdateUserContext } from '../../context/ModalUpdateUser'
import { DataContext } from '../../context/DataProvider'

const ModalUpdateUser = () => {

    const { statesList } = useContext(DataContext)
    const { showModalUpdateUser, setShowModalUpdateUser, updateUser, userForUpdate } = useContext(ModalUpdateUserContext)
    const [dataUserState, setDataUserState] = useState([{ name: '', age: '', state: '' }])

    const setDataUserController = (value, field) => {
        setDataUserState((state) => ({
            ...state,
            [field]: value,
        }));
    };

    const updateUserInModal = e => {
        e.preventDefault()
        e.target.disabled = true
        let obj = {}
        obj['id'] = userForUpdate.id
        obj['name'] = document.querySelector('#name').value
        obj['age'] = document.querySelector('#age').value
        obj['state'] = document.querySelector('#state').value
        updateUser(e, false, obj)
    }

    return (
        showModalUpdateUser && <ModalContainerStyle>
            <ModalContent>
                <ButtonCloseModal >
                    <IoCloseSharp
                        size={20}
                        onClick={() => setShowModalUpdateUser(false)} />
                </ButtonCloseModal>

                <p>Tem certeza que você deseja editar o usuário?</p>

                <FormContainer>

                    <InputContainer>
                        Nome: <input
                            type='text'
                            id="name"
                            defaultValue={userForUpdate.name}
                            onChange={(e) => setDataUserController(e.target.value, 'name')}
                        />
                    </InputContainer>

                    <InputContainer>
                        Idade: <input
                            type='number'
                            id="age"
                            defaultValue={userForUpdate.age}
                            onChange={(e) => setDataUserController(e.target.value, 'age')}
                        />
                    </InputContainer>

                    <InputContainer>
                        Estado: <select
                            id="state"
                            defaultValue={userForUpdate.state}
                            onChange={(e) => setDataUserController(e.target.value, 'state')}  >
                            <option value={''}>Selecione</option>
                            {statesList.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </InputContainer>

                    <ButtonsContainer>
                        <ButtonCreate onClick={(e) => updateUserInModal(e)}>
                            Confirmar
                        </ButtonCreate>

                        <ButtonCreate onClick={() => setShowModalUpdateUser(false)}  >
                            Fechar
                        </ButtonCreate >
                    </ButtonsContainer>
                </FormContainer>
            </ModalContent>
        </ModalContainerStyle >

    )
}

export default ModalUpdateUser