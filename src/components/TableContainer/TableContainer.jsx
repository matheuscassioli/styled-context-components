import { TableDivContainer } from "./TableContainer"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import styled from "styled-components";
import SubTable from "../SubTable/SubTable";


const HugTableContainer = styled.div` 
    max-height: 300px;
    overflow: auto; 
`

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

    function capitalizeFirstLetter(str) {
        if (!str) return ''; // Verifica se a string está vazia
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <TableDivContainer>

            <div>Nome salvo estado do contexto: {nameDirector} </div>

            <button onClick={changeRandomName}>Trocar o nome através do contexto</button>

            <hr />

            <SubTable />

            <hr />

            <p>CRUD BÁSICO + CONTEXTOS ENTRE COMPONENTES</p>


            <HugTableContainer>

                {loading && <h1>Loading....</h1>}

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
                            </tr>
                        })}
                    </tbody>
                </table>}
            </HugTableContainer>
        </TableDivContainer>
    )
}

export default TableContainer