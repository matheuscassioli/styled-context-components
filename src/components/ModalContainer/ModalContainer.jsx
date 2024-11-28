import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from './ModalContainerStyle';


const ModalContainer = () => {
    const { showModal, setShowModal, dataUser, setDateUser } = useContext(DataContext);

    const createUser = e => {
        e.preventDefault()
        let newUser = {
            id: dataUser.length + 1,
            name: 'Matheus',
            age: 26,
            city: "São Paulo"
        }

        fetch('http://localhost/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(data => {
                setDateUser(prevState => [...prevState, data])
            })
    }

    return (
        showModal && (
            <ModalContainerStyle>
                <ModalContent>
                    <ButtonCloseModal onClick={(e) => setShowModal(false)}>
                        <IoCloseSharp size={20} />
                    </ButtonCloseModal>

                    <FormContainer>

                        <InputContainer>
                            Name: <input type='text' />
                        </InputContainer>

                        <InputContainer>
                            Age: <input type='number' />
                        </InputContainer>

                        <InputContainer>
                            City: <input type='text' />
                        </InputContainer>

                        <ButtonsContainer>
                            <ButtonCreate onClick={(e) => createUser(e)}>
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