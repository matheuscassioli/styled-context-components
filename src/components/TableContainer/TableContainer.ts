import styled from "styled-components";

export const TableDivContainer = styled.div`
  padding: 20px;
  background-color: gray;
  min-width: 70%;
`;

export const TableContainerStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TrashContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.4s ease;
  cursor: pointer;

  &:hover {
    color: #dd3838;
  }
`;
