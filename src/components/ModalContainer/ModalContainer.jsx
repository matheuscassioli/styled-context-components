import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCloseModal, ButtonCreate, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from './ModalContainerStyle';


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
        setDateUser(prevState => [...prevState, newUser])
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

                        <ButtonCreate onClick={(e) => createUser(e)}>
                            Criar
                        </ButtonCreate>

                    </FormContainer>
                </ModalContent>
            </ModalContainerStyle>
        )
    );
}

export default ModalContainer