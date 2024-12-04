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

export const EditContainerUser = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.4s ease;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

interface HugTableContainerProps {
  loading?: boolean;
}

export const HugTableContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "loading",
})<HugTableContainerProps>`
  height: 300px;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.loading ? "center" : "flex-start")};
`;
