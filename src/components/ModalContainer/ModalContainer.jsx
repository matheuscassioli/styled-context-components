import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCloseModal, ButtonCreate, ButtonsContainer, FormContainer, InputContainer, ModalContainerStyle, ModalContent } from './ModalContainerStyle';
import toast from 'react-hot-toast';


const ModalContainer = () => {
    const { showModal, setShowModal, setDateUser, statesList } = useContext(DataContext);
    const [dataUserState, setDataUserState] = useState([{ name: '', age: '', state: '' }])

    const createUser = e => {
        e.preventDefault()

        fetch('http://localhost/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...dataUserState,
                delete: false,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setDateUser(prevState => [...prevState, data.item])
                toast.success(data.message, {
                    duration: 2000,
                })
                setTimeout(() => {
                    setShowModal(false)
                }, (1000));
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
                            Nome: <input
                                type='text'
                                required
                                onChange={(e) => setDataUserController(e.target.value, 'name')}
                            />
                        </InputContainer>

                        <InputContainer>
                            Idade: <input
                                type='number'
                                required
                                onChange={(e) => setDataUserController(e.target.value, 'age')}
                            />
                        </InputContainer>

                        <InputContainer>
                            Estado: <select required onChange={(e) => setDataUserController(e.target.value, 'state')} id="estado" name="estado">
                                <option value={''}>Selecione</option>
                                {statesList.map(option => <option key={option} value={option}>{option}</option>)}
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