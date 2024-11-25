import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";


const ModalContainer = () => {
    const { showModal, setShowModal } = useContext(DataContext);

    const ModalContainer = styled.div` 
        width: 100%;
        background: #02004e7d;
        height: -webkit-fill-available;
        position: absolute; 
        display: flex ;
        align-items: center;
        user-select: contain;
        justify-content: center;
    `

    const ModalContent = styled.div` 
        width: 60%;
        min-height: 300px;
        border-radius: 4px;
        background: #e3e3e3;
        position: relative;
    `

    const ButtonCloseModal = styled.button`
        color: black; 
        position: absolute;
        background: unset;
        right: -2px;
        top: 3px;
        border: none;
    `


    return (
        showModal && (
            <ModalContainer>
                <ModalContent>
                    <ButtonCloseModal onClick={(e) => setShowModal(false)}>
                        <IoCloseSharp size={20} />
                        <FormContainer>
                            <label>
                                Nome:
                                <input type='text' />
                            </label>
                        </FormContainer>
                    </ButtonCloseModal>
                </ModalContent>
            </ModalContainer>
        )
    );
}

export default ModalContainer