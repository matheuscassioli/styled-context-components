import styled from "styled-components";

export const ModalContainerStyle = styled.div`
  width: 100%;
  background: #02004e7d;
  height: -webkit-fill-available;
  position: absolute;
  display: flex;
  align-items: center;
  user-select: contain;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 60%;
  min-height: 300px;
  border-radius: 4px;
  background: #e3e3e3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonCloseModal = styled.button`
  color: black;
  position: absolute;
  background: unset;
  right: -2px;
  top: 3px;
  border: none;
  transition: transform 0.3s ease;  

  &:hover {
    transform: rotate(90deg);  
  }
`;

export const FormContainer = styled.form`
  gap: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    background-color: transparent;
    border-radius: 4px;
    color: black;
  }
`;

export const ButtonCreate = styled.button`
  background-color: red;
`;
