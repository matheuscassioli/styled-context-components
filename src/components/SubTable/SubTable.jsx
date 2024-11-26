import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { FaPlus } from "react-icons/fa";
import styled from 'styled-components';


const SubTableContainer = styled.div`  
    display: flex;
`

const SubTable = () => {
    const { setShowModal } = useContext(DataContext);

    return (
        <SubTableContainer>
            <button title="Criar novo usuário" onClick={(e) => setShowModal(true)}>
                <FaPlus />
            </button>
        </SubTableContainer>
    )
}

export default SubTable