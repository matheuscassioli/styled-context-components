import { TableDivContainer } from "./TableContainer"
import data from "../../json/dbjson.json"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";


const TableContainer = () => {

    const { nameDirector, setNameDirector, setShowModal } = useContext(DataContext);

    const nomes = ["Ana", "Carlos", "João", "Maria", "Pedro", "Luiza", "Paula", "Ricardo", "Gabriela", "Felipe"];

    function changeRandomName() {
        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        setNameDirector(nomeAleatorio);
    }

    return (
        <TableDivContainer>

            <div>Nome salvo estado do contexto: {nameDirector} </div>
            <button onClick={changeRandomName}>Trocar o nome através do contexto</button>


            <hr />

            <button onClick={(e) => setShowModal(true)}>Criar novo usuário</button>

            <hr />

            <p>CRUD BÁSICO + CONTEXTOS ENTRE COMPONENTES</p>
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.tabela.dados.map(line => {
                        return <tr key={line.id}>
                            <td>{line.id}</td>
                            <td>{line.name}</td>
                            <td>{line.age}</td>
                            <td>{line.city}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </TableDivContainer>
    )
}

export default TableContainer