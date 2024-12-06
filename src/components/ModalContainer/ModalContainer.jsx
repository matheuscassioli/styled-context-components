import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from './ModalContainerStyle';


const ModalContainer = () => {
    const { showModal, setShowModal, setDateUser, setLoading } = useContext(DataContext);
    const [dataUserState, setDataUserState] = useState([{ name: '', age: '', state: '' }])

    const createUser = e => {
        e.preventDefault()
        setLoading(true)
        setShowModal(false)

        fetch('http://localhost/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataUserState),
        })
            .then(response => response.json())
            .then(data => {
                setDateUser(prevState => [...prevState, data])
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
    }

    const setDataUserController = (value, field) => {
        setDataUserState((state) => ({
            ...state,
            [field]: value,
        }));
    };

    return (
        showModal && (
            <ModalContainerStyle   >
                <ModalContent>
                    <ButtonCloseModal onClick={(e) => setShowModal(false)}>
                        <IoCloseSharp size={20} />
                    </ButtonCloseModal>

                    <FormContainer onSubmit={createUser}>

                        <InputContainer>
                            Nome: <input type='text' required onChange={(e) => setDataUserController(e.target.value, 'name')} />
                        </InputContainer>

                        <InputContainer>
                            Idade: <input type='number' required onChange={(e) => setDataUserController(e.target.value, 'age')} />
                        </InputContainer>

                        <InputContainer>
                            Estado:    <select required onChange={(e) => setDataUserController(e.target.value, 'state')} id="estado" name="estado">
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
                            <ButtonCreate type='submit'>
                                Criar
                            </ButtonCreate>

                            <ButtonCreate onClick={(e) => setShowModal(false)}>
                                Fechar
                            </ButtonCreate>
                        </ButtonsContainer>

                    </FormContainer>
                </ModalContent>
            </ModalContainerStyle >
        )
    );
}

export default ModalContainer