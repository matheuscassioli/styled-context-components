import styled from "styled-components";

export const ModalContainerStyle = styled.div`
  width: 100%;
  background: #000000bf;
  height: -webkit-fill-available;
  position: absolute;
  display: flex;
  align-items: center; 
  justify-content: center;
`;

export const ModalContent = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
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
  gap: 1.5rem;
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

  input {
    background-color: transparent;
    border-radius: 4px;
    color: black;
    border: solid gray 1px;
    height: 20px;
  }
`;

export const ButtonCreate = styled.button`
  background-color: gray;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
