import React from 'react'
import styled from 'styled-components'
import { PiSmileySad } from "react-icons/pi";

const RenderEmptyListStyle = styled.div` 
    font-size: 18px;
    align-items: center;
    gap: 6px;
    margin-top: 1rem;
`
const RenderEmptyList = () => {
    return <RenderEmptyListStyle>Não existe usuários cadastrados <PiSmileySad /></RenderEmptyListStyle>

}

export default RenderEmptyList