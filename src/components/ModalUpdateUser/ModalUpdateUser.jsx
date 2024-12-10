import React, { useContext, useState } from 'react'
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from '../ModalContainer/ModalContainerStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalUpdateUserContext } from '../../context/ModalUpdateUser'

const ModalUpdateUser = () => {

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
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
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