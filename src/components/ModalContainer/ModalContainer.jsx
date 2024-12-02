import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from './ModalContainerStyle';


const ModalContainer = () => {
    const { showModal, setShowModal, dataUser, setDateUser } = useContext(DataContext);
    const [dataUserState, setDataUserState] = useState([{ name: '', age: '', city: '' }])

    const createUser = e => {
        e.preventDefault()

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
    }

    const setDataUserController = (value, field) => {
        setDataUserState((state) => ({
            ...state,
            [field]: value,
        }));
    };

    return (
        showModal && (
            <ModalContainerStyle>
                <ModalContent>
                    <ButtonCloseModal onClick={(e) => setShowModal(false)}>
                        <IoCloseSharp size={20} />
                    </ButtonCloseModal>

                    <FormContainer onSubmit={(e) => createUser(e)}>

                        <InputContainer>
                            Name: <input type='text' required onChange={(e) => setDataUserController(e.target.value, 'name')} />
                        </InputContainer>

                        <InputContainer>
                            Age: <input type='number' required onChange={(e) => setDataUserController(e.target.value, 'age')} />
                        </InputContainer>

                        <InputContainer>
                            City: <input type='text' required onChange={(e) => setDataUserController(e.target.value, 'city')} />
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