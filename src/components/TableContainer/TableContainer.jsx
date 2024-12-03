import { TableDivContainer, TrashContainer } from "./TableContainer"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import styled from "styled-components";
import SubTable from "../SubTable/SubTable";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaRegTrashAlt } from "react-icons/fa";

const HugTableContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'loading',
})`
    height: 300px;
    overflow: auto; 
    display: flex;
    justify-content: center;
    align-items: ${(props) => (props.loading ? 'center' : 'flex-start')};
  `;

const TableContainer = () => {
    const { nameDirector, setNameDirector, dataUser, loading } = useContext(DataContext);

    const names = ["Ana", "Carlos", "João", "Maria", "Pedro", "Luiza", "Paula", "Ricardo", "Gabriela", "Felipe"];

    function changeRandomName() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setNameDirector(randomName);
    }

    const returnHeaders = () => {
        return <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const renderTrashIcon = user => {
        return <TrashContainer onClick={(e) => window.alert(`Tem certeza que deseja deletar o usuário ${user.name}?`)}>
            <FaRegTrashAlt />
        </TrashContainer>
    }

    return (
        <TableDivContainer>

            <div>Nome salvo estado do contexto: {nameDirector} </div>

            <button onClick={changeRandomName}>Trocar o nome através do contexto</button>

            <hr />

            <SubTable />

            <hr />

            <p>CRUD BÁSICO + CONTEXTOS ENTRE COMPONENTES</p>

            <HugTableContainer loading={loading}>

                {loading && <LoadingSpinner />}

                {!loading && <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        {returnHeaders()}
                    </thead>
                    <tbody>
                        {dataUser.map(line => {
                            return <tr key={line.id}>
                                <td>{line.id}</td>
                                <td>{capitalizeFirstLetter(line.name)}</td>
                                <td>{line.age}</td>
                                <td>{capitalizeFirstLetter(line.city)}</td>
                                <td>{renderTrashIcon(line)}</td>
                            </tr>
                        })}
                    </tbody>
                </table>}
            </HugTableContainer>
        </TableDivContainer>
    )
}

export default TableContainer